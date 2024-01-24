import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';
import './Register.styles.css'

const Register = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        fullname: '',
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
        dispatch(registerUser(formData));
        setFormData({
            email: '',
            fullname: '',
            username: '',
            password: ''
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div className="input-group">
                    <input className="input" required autoComplete="off" type="text" name="email" id="email" value={formData.email} onChange={handleChange} />
                    <label className="label" htmlFor="email">Email</label>
                </div>
                <div className="input-group">
                    <input className="input" required autoComplete="off" type="text" name="fullname" id="fullname" value={formData.fullname} onChange={handleChange} />
                    <label className="label" htmlFor="fullname">Full Name</label>
                </div>
                <div className="input-group">
                    <input className="input" required autoComplete="off" type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
                    <label className="label" htmlFor="username">User Name</label>
                </div>
                <div className="input-group">
                    <input className="input" required autoComplete="off" type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
                    <label className="label" htmlFor="password">Pass Word</label>
                </div>

                <button type="submit"  >Registrar</button>

            </form>
        </div>
    );
};

export default Register;
