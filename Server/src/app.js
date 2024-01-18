const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const server = express();

// const plantsRoute = require("./routes/plantsRoute.js");
// let categoryPlants = require('./routes/categoryPlants.js')

const userRoute = require('./Routes/RouteUser')

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// User
server.use('/user', userRoute);

// // Plantas
// server.use("/plants", plantsRoute);

// // Categorias
// server.use('/categories', categoryPlants);


module.exports = server;