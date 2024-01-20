import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';


const Login = () => {

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
        dispatch(loginUser(formData));
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
                    <label htmlFor="password">Clave de usuario</label>
                    <input type="text" id='password' name='password' value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Login;
