import React from 'react';
import { Routes, Route } from 'react-router';
import PropTypes from 'prop-types';
import useScrollRestore from '../hooks/useScrollRestore';
import AllProducts from '../pages/AllProducts';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import ErrorPage from '../pages/ErrorPage';
import AboutUs from '../pages/AboutUs';

/**
 * Component that handles routing for the application
 * @returns {JSX.Element} Router component with route definitions
 */
const RouterRoutes = () => {
    // Restore scroll position when navigating
    useScrollRestore();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/product-details/:productId" element={<ProductDetails />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

// PropTypes validation
RouterRoutes.propTypes = {
    // Currently no props passed to RouterRoutes, but adding PropTypes setup
    // for potential future props
};

export default RouterRoutes;