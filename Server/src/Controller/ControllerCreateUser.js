let mongoose = require('mongoose');
require('../Schema/User');

let User = mongoose.model('User');




const createUserController = async (username, password) => {

    const userExist = await User.findOne({ username });
    if (userExist) {
        throw new Error(`El usuario por nombre ${username} ya existe en la base de datos!`)
    }

    const newUser = await User.create(
        {
            username: username,
            password: password
        }
    )

    return newUser;

}

module.exports = createUserController;