const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');  // Agrega esta línea
const server = express();

const userRoute = require('./Routes/RouteUser')

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(cors());

// User
server.use('/user', userRoute);

module.exports = server;