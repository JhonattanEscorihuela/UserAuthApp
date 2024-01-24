const createUserController = require('../Controller/ControllerCreateUser');

const createUserHandler = async (req, res) => {

    const { email, fullname, username, password } = req.body;
    try {

        if (!username || !password) {
            throw new Error(" ❌ Faltan Datos para crear es usuario");
        }
        await createUserController(email, fullname, username, password);
        res.status(201).json({ message: 'Usuario registrado exitosamente 🧑‍💻' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

module.exports = createUserHandler;