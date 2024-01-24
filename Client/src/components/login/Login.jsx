import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
                <div className="input-group">
                    <input className="input" required autoComplete="off" type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
                    <label className="label" htmlFor="username">User Name</label>
                </div>

                <div className="input-group">
                    <input className="input" required autoComplete="off" type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
                    <label className="label" htmlFor="password">Pass Word</label>
                </div>
                <button type="submit">Login</button>
                <div className='register-container' >
                    <Link to={'/register'}>
                        Don't have an account?
                    </Link>
                </div>

            </form>
        </div>
    );
};

export default Login;
