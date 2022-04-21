const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email : {
        type: String,
        unique : true
    },
    password : { 
        type: String
    }
})

const model = new mongoose.model('user', schema)
module.exports = model;