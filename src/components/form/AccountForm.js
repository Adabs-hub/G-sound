import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import commonContext from '../../contexts/common/commonContext';
import useForm from '../../hooks/useForm';
import useOutsideClose from '../../hooks/useOutsideClose';

/**
 * Account form component for handling user login/signup
 * Displays a modal form with login/signup options
 */
const AccountForm = () => {
    const { isFormOpen, toggleForm } = useContext(commonContext);
    const { inputValues, handleInputValues, handleFormSubmit } = useForm();
    const formRef = useRef();
    const [isSignupVisible, setIsSignupVisible] = useState(false);

    // Close form when clicking outside
    useOutsideClose(formRef, () => {
        toggleForm(false);
    });

    // Toggle between signup/login forms
    const handleIsSignupVisible = () => {
        setIsSignupVisible(prevState => !prevState);
    };

    // Form email validation
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Enhanced form submission with validation
    const onSubmit = (e) => {
        e.preventDefault();
        
        if (!validateEmail(inputValues.mail)) {
            alert('Please enter a valid email address');
            return;
        }

        if (isSignupVisible && inputValues.password !== inputValues.conf_password) {
            alert('Passwords do not match');
            return;
        }

        handleFormSubmit(e);
    };

    return (
        <>
            {isFormOpen && (
                <div className="backdrop">
                    <div className="modal_centered">
                        <form id="account_form" ref={formRef} onSubmit={onSubmit}>

                            {/*===== Form-Header =====*/}
                            <div className="form_head">
                                <h2>{isSignupVisible ? 'Signup' : 'Login'}</h2>
                                <p>
                                    {isSignupVisible ? 'Already have an account ?' : 'New to X-Beat ?'}
                                    &nbsp;&nbsp;
                                    <button type="button" onClick={handleIsSignupVisible}>
                                        {isSignupVisible ? 'Login' : 'Create an account'}
                                    </button>
                                </p>
                            </div>

                            {/*===== Form-Body =====*/}
                            <div className="form_body">
                                {isSignupVisible && (
                                    <div className="input_box">
                                        <input
                                            type="text"
                                            name="username"
                                            className="input_field"
                                            value={inputValues.username || ''}
                                            onChange={handleInputValues}
                                            required
                                        />
                                        <label className="input_label">Username</label>
                                    </div>
                                )}

                                <div className="input_box">
                                    <input
                                        type="email"
                                        name="mail"
                                        className="input_field"
                                        value={inputValues.mail || ''}
                                        onChange={handleInputValues}
                                        required
                                    />
                                    <label className="input_label">Email</label>
                                </div>

                                <div className="input_box">
                                    <input
                                        type="password"
                                        name="password"
                                        className="input_field"
                                        value={inputValues.password || ''}
                                        onChange={handleInputValues}
                                        required
                                    />
                                    <label className="input_label">Password</label>
                                </div>

                                {isSignupVisible && (
                                    <div className="input_box">
                                        <input
                                            type="password"
                                            name="conf_password"
                                            className="input_field"
                                            value={inputValues.conf_password || ''}
                                            onChange={handleInputValues}
                                            required
                                        />
                                        <label className="input_label">Confirm Password</label>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn login_btn"
                                >
                                    {isSignupVisible ? 'Signup' : 'Login'}
                                </button>
                            </div>

                            {/*===== Form-Footer =====*/}
                            <div className="form_foot">
                                <p>or login with</p>
                                <div className="login_options">
                                    <Link to="/">Facebook</Link>
                                    <Link to="/">Google</Link>
                                    <Link to="/">Twitter</Link>
                                </div>
                            </div>

                            {/*===== Form-Close-Btn =====*/}
                            <div
                                className="close_btn"
                                title="Close"
                                onClick={() => toggleForm(false)}
                            >
                                &times;
                            </div>

                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

AccountForm.propTypes = {
    isFormOpen: PropTypes.bool,
    toggleForm: PropTypes.func
};

export default AccountForm;