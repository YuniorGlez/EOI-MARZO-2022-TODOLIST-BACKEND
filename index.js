const express = require('express');
const mongoose = require('mongoose');
const { isAuthenticated } = require('./middlewares/auth.middleware');

const morgan = require('morgan');
const compression = require('compression');
const cors = require('cors');
const app = express();

app.use(compression()) // Esto es un middleware 

app.use(express.json()) // Esto es un middleware 
app.use(cors()) // Esto es un middleware 

app.use(morgan()) // Esto es un middleware 


mongoose.connect('mongodb+srv://eoi-marzo:GVer54s2S2XYbavu@cluster0.rfeeu.mongodb.net/todolist?retryWrites=true&w=majority')

const taskRouter = require('./api/tasks/tasks.router')

app.use('/api/tasks' , isAuthenticated, taskRouter)

const authRouter = require('./api/auth/auth.router');
app.use('/api/auth', authRouter)

app.listen(5000, (err) => {
    if (err) {

    }else{
        console.log('Servidor corriendo en el puerto 5000')
    }
})