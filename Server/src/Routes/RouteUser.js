const { Router } = require("express");
const userRoute = Router();
const handlerCreateUser = require('../Handler/HandlerCreateUser');



userRoute.post('/register', handlerCreateUser);


module.exports = userRoute;