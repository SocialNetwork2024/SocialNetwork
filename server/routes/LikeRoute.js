const router = require('express').Router()
const controller = require('../controller/LikeController')

router.get('/getlikes/:id', controller.numbersOfLikes)

router.post('/add/:postid', controller.like)

router.delete('/delete/:id', controller.dislike)

module.exports = router