let mongoose = require('mongoose');
require('../Schema/User');
const bcrypt = require('bcrypt');

let User = mongoose.model('User');


const createUserController = async (username, password) => {

    const userExist = await User.findOne({ username });
    if (userExist) {
        throw new Error(`El usuario por nombre ${username} ya existe en la base de datos!`)
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        username,
        password: hashedPassword
    });

    await user.save();



}

module.exports = createUserController;