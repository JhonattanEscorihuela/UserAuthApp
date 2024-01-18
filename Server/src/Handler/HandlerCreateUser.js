const createUserController = require('../Controller/ControllerCreateUser');


const createUserHandler = async (req, res) => {

    const { username, password } = req.body;
    try {

        if (!username, !password) {
            throw new Error(" ❌ Faltan Datos para crear es usuario");
        }
        await createUserController(username, password);
        res.status(201).send('Usuario registrado exitosamente 🧑‍💻');
    } catch (error) {
        res.status(400).json({ error: error.message })
        process.exit(1);
    }

}

module.exports = createUserHandler;