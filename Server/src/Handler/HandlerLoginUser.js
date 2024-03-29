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
        res.status(400).json({ error: error.message });
    }
}

module.exports = LoginUserHandler;