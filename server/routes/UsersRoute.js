// const Route = require("express").Router();
// const controller = require("../controller/UsersController");

// Route.post('/signup',controller.Addaccount)
// Route.get('/login',controller.login)
// Route.get('/getAll',controller.getAll)
// Route.delete('/delete/:idlogin',controller.destroy)
// Route.get('/getOne/:idlogin',controller.getOne)


// module.exports = Route;

const router = require('express').Router()
const controller = require('../controller/UsersController')

router.get('/getall', controller.getAll)

router.get('/getone/:id', controller.getOneUser)

router.post('/signup',controller.addAccount)

router.get('/login',controller.login)

router.delete('/delete/:id', controller.destroy)

module.exports = router
// {getAll, getOneUser, addAccount, login, destroy}