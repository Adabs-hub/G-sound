import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EmptyView = ({ icon, msg, link, btnText }) => {
    return (
        <div className="empty_view_wrapper">
            <div className="empty_view_icon">
                {icon}
            </div>
            <h2>{msg}</h2>
            {link && (
                <Link to={link} className="btn">
                    {btnText}
                </Link>
            )}
        </div>
    );
};

EmptyView.propTypes = {
    icon: PropTypes.element,
    msg: PropTypes.string.isRequired,
    link: PropTypes.string,
    btnText: PropTypes.string
};

export default EmptyView;