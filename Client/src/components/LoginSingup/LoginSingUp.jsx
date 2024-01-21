import React, { useState } from 'react';
import './LoginSingup.css';

const LoginSignup = () => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [isActive, setIsActive] = useState(false);

    const toggleFormType = () => {
        setIsLoginForm(!isLoginForm);
    };

    const activateForm = () => {
        setIsActive(true);
    };

    const containerClassName = `container ${isLoginForm ? '' : 'log-in'} ${isActive ? 'active' : ''}`;
    return (
        <div className={containerClassName}>
            <div className="box"></div>
            <div className="container-forms">
                <div className="container-info">
                    <div className="info-item">
                        <div className="table">
                            <div className="table-cell">
                                <p>
                                    Have an account?
                                </p>
                                <div className="btn" onClick={toggleFormType}>
                                    Log in
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="table">
                            <div className="table-cell">
                                <p>
                                    Don't have an account?
                                </p>
                                <div className="btn" onClick={toggleFormType}>
                                    Sign up
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-form">
                    <div className={`form-item ${isLoginForm ? 'log-in' : 'sign-up'}`}>
                        <div className="table">
                            <div className="table-cell">
                                {isLoginForm ? (
                                    <>
                                        <input name="Username" placeholder="Username" type="text" />
                                        <input name="Password" placeholder="Password" type="password" />
                                    </>
                                ) : (
                                    <>
                                        <input name="email" placeholder="Email" type="text" />
                                        <input name="fullName" placeholder="Full Name" type="text" />
                                        <input name="Username" placeholder="Username" type="text" />
                                        <input name="Password" placeholder="Password" type="password" />
                                    </>
                                )}
                                <div className="btn" onClick={activateForm}>
                                    {isLoginForm ? 'Log in' : 'Sign up'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
