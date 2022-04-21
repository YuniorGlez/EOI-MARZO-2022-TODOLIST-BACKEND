const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    title : {
        type: String,
        required : true,
        minlength: 3,
        maxlength: [ 20 , "Chaaaaacho, esto es muy grande" ] 
    },
    userId : Number,
    completed : Boolean
})



const model = new mongoose.model('task', schema)

module.exports = model;