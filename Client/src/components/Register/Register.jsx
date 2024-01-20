import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';

const Register = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verificar que las contraseñas coincidan antes de enviar la solicitud
        dispatch(registerUser(formData));
        setFormData({
            username: '',
            password: ''

        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" id='username' name='username' value={formData.username} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id='password' name='password' value={formData.password} onChange={handleChange} />
                </div>

                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Register;
