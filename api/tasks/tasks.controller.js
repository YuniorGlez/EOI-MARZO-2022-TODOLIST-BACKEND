
const taskModel = require('./tasks.model')



module.exports = { create, getAll, getOne, deleteOne, replaceOne, updateOne }

function create(req, res) {
    return taskModel.create(req.body)
        .then(response => {
            return res.send(response);
        })
        .catch(err => {
            return res.status(500).send(err)
        })            
}

function getAll(req, res) {
    return taskModel.find({})
        .then(tasks => {
            return res.send(tasks)
        })
}

function getOne(req, res) {
    return res.send('Ok')
}


function deleteOne(req, res) {
    return taskModel.findByIdAndRemove( req.params.id )
        .then(response => {
            return res.send('Ok')
        })
        .catch(err => {
            return res.status(500).send(err)
        })
}


function replaceOne(req, res) {
    return res.send('Ok')
}


function updateOne(req, res) {
    return res.send('Ok')
}

