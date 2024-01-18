require('dotenv').config({ path: '../.env' });
const { USER, PASSWORD, HOST, JWT_SECRET } = process.env;
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    const con = await mongoose.connect(`mongodb+srv://jhonattan1410:${PASSWORD}@userauthapp.xxswn8u.mongodb.net/?retryWrites=true&w=majority`)
    console.log(`mongodb connected: ${con.connection.host}`);
    

}

module.exports = mongoose;