import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/actions/authActions';
import Welcome from '../Welcome/Welcome';




const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await dispatch(loginUser(formData));

        if (response.data.response.error) {
            setMessage(response.data.response.error);
        } else {
            const token = response.data.response.token;
            setMessage(response.data.response.message);
            setFormData({
                username: '',
                password: ''
            })

            navigate('/welcome', { state: { username: formData.username } });


        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input className="input" required autoComplete="off" type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
                    <label className="label" htmlFor="username">User Name</label>
                </div>

                <div className="input-group">
                    <input className="input" required autoComplete="off" type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
                    <label className="label" htmlFor="password">Pass Word</label>
                </div>
                <button type="submit">Login</button>
            </form>
            {message && (
                <div className="modal">
                    <div className="modal-content">
                        <p>{message}</p>
                        {!message.toLowerCase().includes("correctamente") && (
                            <button onClick={() => setMessage('')}>Close</button>
                        )}
                    </div>
                </div>
            )}
            <div className='register-container' >
                <Link to={'/register'}>
                    Don't have an account?
                </Link>
            </div>


        </div>
    );
};

export default Login;
