const router = require('express').Router()
const controller = require('../controller/CommentController')

router.post('/add/:postid', controller.addComment)

router.put('/edit/:id', controller.editComment)

router.delete('/delete/:id', controller.deleteComment)

module.exports = router