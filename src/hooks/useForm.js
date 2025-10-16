import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import commonContext from '../contexts/common/commonContext';

/**
 * Custom hook for form handling with validation and submission
 * @returns {Object} Form handling methods and state
 */
const useForm = () => {
    const { toggleForm, setFormUserInfo } = useContext(commonContext);
    const [inputValues, setInputValues] = useState({});

    /**
     * Validates email format
     * @param {string} email - Email to validate
     * @returns {boolean} Whether email is valid
     */
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    /**
     * Updates form input values
     * @param {Event} e - Input change event
     */
    const handleInputValues = (e) => {
        const { name, value } = e.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    /**
     * Handles form submission with validation
     * @param {Event} e - Form submission event
     */
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Validate email
        if (!inputValues.mail || !isValidEmail(inputValues.mail)) {
            alert('Please enter a valid email address');
            return;
        }

        const loggedUserInfo = inputValues.mail.split('@')[0].toUpperCase();

        setInputValues({});
        setFormUserInfo(loggedUserInfo);
        toggleForm(false);
        alert(`Hello ${loggedUserInfo}, you're successfully logged-in.`);
    };

    return { inputValues, handleInputValues, handleFormSubmit };
};

// PropTypes validation for context values
useForm.propTypes = {
    toggleForm: PropTypes.func,
    setFormUserInfo: PropTypes.func
};

export default useForm;