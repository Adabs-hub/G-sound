import React from 'react';
import PropTypes from 'prop-types';

const TeamMember = ({ name, role, image, description }) => {
    return (
        <div className="team-member">
            <div className="member-image">
                <img src={image} alt={name} loading="lazy" />
            </div>
            <div className="member-info">
                <h3>{name}</h3>
                <h4>{role}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

TeamMember.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default TeamMember;