import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config'; // Ensure Firebase is correctly initialized in this file

const Signup: React.FC = () => {
    const navigate = useNavigate();

    // State hooks for managing form data
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Firebase function to create a user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User created:', user);

            setSuccessMessage('User created successfully! Redirecting to login...');
            setErrorMessage('');

            // Redirect to login page after signup
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (error) {
            // Handle errors
            const errorCode = (error as any).code;
            const errorMessage = (error as any).message;
            console.error('Error creating user:', errorCode, errorMessage);
            setErrorMessage(errorMessage);
            setSuccessMessage('');
        }
    };

    return (
        <>
            {/* Header Section */}
            <section className="breadcrumb_section page-title-light background_bg bg_fixed overlay_bg_blue_70" style={{ backgroundImage: 'url(assets/images/breadcrumb_bg2.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 text-center">
                            <div className="page-title">
                                <h1>Signup Form</h1>
                            </div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item active" aria-current="page">Signup</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* Signup Form Section */}
            <section className="small_pt">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            {/* Frame for the Form */}
                            <div className="form-frame">
                                <div className="heading_s2 text-center">
                                    <h5>Create Your Account</h5>
                                </div>
                                <div className="field_form form_style1 icon_form">
                                    <form onSubmit={onSubmit}>
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
                                            <button type="submit" className="btn btn-default" title="Submit Your Signup!">
                                                Signup
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;
