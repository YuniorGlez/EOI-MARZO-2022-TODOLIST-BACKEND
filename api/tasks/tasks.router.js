const router = require('express').Router();
const { isAdmin } = require('../../middlewares/auth.middleware');
const controller = require('./tasks.controller')

router.post('/', controller.create)
router.get('/',  controller.getAll)
router.get('/:id',controller.getOne)
router.delete('/:id',  isAdmin    ,controller.deleteOne)
router.put('/:id', controller.replaceOne)
router.patch('/:id', controller.updateOne)

module.exports = router