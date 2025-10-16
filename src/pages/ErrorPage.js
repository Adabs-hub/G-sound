import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * 404 Error Page component
 * Displays a user-friendly error message when a page is not found
 * @returns {React.ReactElement} ErrorPage component 
 */
const ErrorPage = () => {
    return (
        <section id="error_page" className="section">
            <div className="container">
                <div className="error_page_content">
                    <h1>404</h1>
                    <h2>Not Found</h2>
                    <h3>Sorry, the requested page was not found.</h3>
                    <Link to="/" className="btn">Go Home</Link>
                </div>
            </div>
        </section>
    );
};

ErrorPage.propTypes = {
    // No props currently, but adding PropTypes definition for future extensibility
};

export default ErrorPage;