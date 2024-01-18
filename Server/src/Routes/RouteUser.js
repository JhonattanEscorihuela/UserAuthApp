const { Router } = require("express");
const userRoute = Router();
const handlerCreateUser = require('../Handler/HandlerCreateUser');
const handlerLoginUser = require('../Handler/HandlerLoginUser');


//Register User --> OK
userRoute.post('/register', handlerCreateUser);

//Login --> Pdt
userRoute.post('/login', handlerLoginUser);


module.exports = userRoute;