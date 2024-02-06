const coffeeRoute = require("express").Router();
const controller = require("../controllers/coffee.controller");






translateRoute.get("/getAll", controller.getAll);

module.exports = coffeeRoute;