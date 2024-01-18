const { Router } = require("express");
const userRoute = Router();
const handlerCreateUser = require('../Handler/HandlerCreateUser');



userRoute.post('/create', handlerCreateUser);


module.exports = userRoute;