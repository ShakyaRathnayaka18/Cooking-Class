import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { NavLink, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();
    
    // State hooks for managing form data
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);

                setSuccessMessage('Logged in successfully! Redirecting to home...');
                setErrorMessage('');

                // Redirect to home page after login
                setTimeout(() => {
                    navigate("/profile");
                }, 2000);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Login failed:', errorCode, errorMessage);
                setErrorMessage(errorMessage);
                setSuccessMessage('');
            });
    };

    return (
        <>
            {/* Header Section */}
            <section className="breadcrumb_section page-title-light background_bg bg_fixed overlay_bg_blue_70" style={{ backgroundImage: 'url(assets/images/breadcrumb_bg2.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 text-center">
                            <div className="page-title">
                                <h1>Login Form</h1>
                            </div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item active" aria-current="page">Login</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* Login Form Section */}
            <section className="small_pt">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            {/* Frame for the Form */}
                            <div className="form-frame">
                                <div className="heading_s2 text-center">
                                    <h5>Login to Your Account</h5>
                                </div>
                                <div className="field_form form_style1 icon_form">
                                    <form onSubmit={onLogin}>
                                        {/* Email input */}
                                        <div className="form-group">
                                            <div className="form-input">
                                                <span>
                                                    <i className="ti-email"></i>
                                                </span>
                                                <input
                                                    required
                                                    placeholder="Enter Email *"
                                                    className="form-control"
                                                    name="email"
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        {/* Password input */}
                                        <div className="form-group">
                                            <div className="form-input">
                                                <span>
                                                    <i className="ti-lock"></i>
                                                </span>
                                                <input
                                                    required
                                                    placeholder="Enter Password *"
                                                    className="form-control"
                                                    name="password"
                                                    type="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        {/* Display error and success messages */}
                                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                                        {successMessage && <div className="alert alert-success">{successMessage}</div>}

                                        {/* Submit button */}
                                        <div className="col-lg-12 text-center">
                                            <button type="submit" className="btn btn-default" title="Login!">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                    <div className="text-center mt-3">
                                        <NavLink to="/signup">Don't have an account? Sign up here!</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;