const router = require('express').Router()
const controller = require('../controller/PostController')

router.get('/getall', controller.getAll)

router.get('/getlikeComment/:id', controller.getLikesComments)

router.post('/add', controller.addPost)

router.put('/edit/:id', controller.editPost)

router.delete('/delete/:id', controller.deletePost)

module.exports = router