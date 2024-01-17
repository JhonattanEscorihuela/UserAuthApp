const server = require("./src/app.js");
require('dotenv').config();
const { PORT } = process.env;
const mongoose = require("./src/db.js");

mongoose.connection.once('open', () => {
    console.log('Mongo iniciado')
});

server.listen(PORT, () => {
    console.log(`Server listen in port http://localhost:${PORT}`)
});
