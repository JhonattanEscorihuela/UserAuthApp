const userLoginController = require('../Controller/ControllerLoginUser');


const LoginUserHandler = async (req, res) => {

    const { username, password } = req.body;

    try {

        if (!username || !password) {
            throw new Error('❌ Faltan Datos para Loguearse')
        }

        const response = await userLoginController(username, password);
        res.json({ response });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error al autenticar el usuario.');
    }
}

module.exports = LoginUserHandler;