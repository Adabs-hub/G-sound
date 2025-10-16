import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import PropTypes from 'prop-types';

/**
 * BackTop component that displays a "back to top" button when user scrolls down
 * Button appears at 800px scroll depth and smoothly scrolls to top when clicked
 * @returns {React.ReactElement} BackTop component
 */
const BackTop = () => {
    // State to control button visibility
    const [isVisible, setIsVisible] = useState(false);

    // Scroll event handler to toggle button visibility
    const handleScroll = () => {
        const shouldBeVisible = window.scrollY >= 800;
        setIsVisible(shouldBeVisible);
    };

    // Setup scroll listener on mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup scroll listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Smooth scroll to top handler
    const handleBackTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div
            className={`back_top ${isVisible ? 'popped' : ''}`}
            title="Back to top"
            onClick={handleBackTop}
            role="button"
            tabIndex={0}
            aria-label="Scroll back to top"
        >
            <FaChevronUp />
        </div>
    );
};

BackTop.propTypes = {
    // No props currently, but adding PropTypes setup for future extensibility
};

export default BackTop;