import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BsExclamationCircle } from 'react-icons/bs';
import useDocTitle from '../hooks/useDocTitle';
import FilterBar from '../components/filters/FilterBar';
import ProductCard from '../components/product/ProductCard';
import Services from '../components/common/Services';
import filtersContext from '../contexts/filters/filtersContext';
import EmptyView from '../components/common/EmptyView';

/**
 * AllProducts page component that displays filtered product grid
 * @returns {JSX.Element} AllProducts page component
 */
const AllProducts = () => {
    // Set page title
    useDocTitle('All Products');

    // Get filtered products from context
    const { allProducts } = useContext(filtersContext);

    return (
        <>
            <section id="all_products" className="section">
                <FilterBar />

                <div className="container">
                    {allProducts.length ? (
                        <div className="wrapper products_wrapper">
                            {allProducts.map(item => (
                                <ProductCard
                                    key={item.id}
                                    {...item}
                                />
                            ))}
                        </div>
                    ) : (
                        <EmptyView
                            icon={<BsExclamationCircle />}
                            msg="No Results Found"
                        />
                    )}
                </div>
            </section>

            <Services />
        </>
    );
};

AllProducts.propTypes = {
    // No props currently, but adding PropTypes definition for future extensibility
};

export default AllProducts;