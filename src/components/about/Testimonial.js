import React from 'react';
import PropTypes from 'prop-types';

const Testimonial = ({ name, image, text, rating }) => {
    return (
        <div className="testimonial">
            <div className="testimonial-content">
                <p className="testimonial-text">{text}</p>
                <div className="rating">
                    {[...Array(rating)].map((_, index) => (
                        <span key={index} className="star">★</span>
                    ))}
                </div>
            </div>
            <div className="testimonial-author">
                <img src={image} alt={name} loading="lazy" />
                <h4>{name}</h4>
            </div>
        </div>
    );
};

Testimonial.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

export default Testimonial;