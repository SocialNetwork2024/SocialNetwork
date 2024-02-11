const router = require('express').Router()
const controller = require('../controller/UserController')

router.get('/getall', controller.getAll)

router.get('/getone/:id', controller.getOneUser)

router.post('/signup',controller.addAccount)

router.get('/login',controller.login)

router.delete('/delete/:id', controller.destroy)

module.exports = router