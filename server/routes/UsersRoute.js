const Route = require("express").Router();
const controller = require("../controller/UsersController");

Route.post('/signup',controller.Addaccount)
Route.get('/login',controller.login)


module.exports = Route;