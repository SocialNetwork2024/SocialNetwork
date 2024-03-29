const router = require('express').Router()
const controller = require('../controller/CommentController')

router.post('/add/:id', controller.addComment)

router.put('/edit/:id', controller.editComment)

router.delete('/delete/:id', controller.deleteComment)
router.get('/getAll',controller.getAll)

module.exports = router