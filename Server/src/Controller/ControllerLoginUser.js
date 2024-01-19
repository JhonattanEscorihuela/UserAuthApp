const mongoose = require('mongoose');
require('../Schema/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const path = require('path');
const dotenvPath = path.resolve(__dirname, '../../.env');
require('dotenv').config({ path: dotenvPath });
const { JWT_SECRET } = process.env;


const User = mongoose.model('User');

const LoginUserController = async (username, password) => {

    const userExist = await User.findOne({ username });

    if (!userExist || !(await bcrypt.compare(password, userExist.password))) {
        return { error: '❌ Credenciales incorrectas!' };
    }

    const token = jwt.sign({ username: userExist.username }, JWT_SECRET, { expiresIn: '1h' });
    return { message: '✔️ Usuario autenticado correctamente', token };
}

module.exports = LoginUserController;