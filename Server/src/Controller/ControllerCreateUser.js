const mongoose = require('mongoose');
require('../Schema/User');
const bcrypt = require('bcrypt');

const User = mongoose.model('User');

const createUserController = async (email, fullname, username, password) => {

    const userExist = await User.findOne({ email });
    if (userExist) {
        throw new Error(`El usuario por correo ${email} ya existe en la base de datos!`)
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        email,
        fullname,
        username,
        password: hashedPassword
    });

    await user.save();
}

module.exports = createUserController;