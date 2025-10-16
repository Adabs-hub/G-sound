import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import productsData from '../../data/productsData';
import { brandsMenu, categoryMenu } from '../../data/filterBarData';
import filtersReducer from './filtersReducer';
import { calculatePriceRange } from '../../helpers/utils';

// Filters-Context
const filtersContext = createContext();

// Initial State 
const initialState = {
    allProducts: [],
    sortedValue: null,
    updatedBrandsMenu: brandsMenu,
    updatedCategoryMenu: categoryMenu,
    selectedPrice: {
        price: 0,
        minPrice: 0,
        maxPrice: 0
    },
    mobFilterBar: {
        isMobSortVisible: false,
        isMobFilterVisible: false,
    },
};

// Calculate price ranges for products
const getPriceRanges = (products) => {
    const priceArr = products.map(item => item.finalPrice);
    return {
        minPrice: Math.min(...priceArr),
        maxPrice: Math.max(...priceArr)
    };
};

// Filters-Provider Component
const FiltersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filtersReducer, initialState);

    /* Loading All Products on the initial render */
    useEffect(() => {
        const products = [...productsData];
        const { minPrice, maxPrice } = getPriceRanges(products);

        dispatch({
            type: 'LOAD_ALL_PRODUCTS',
            payload: { products, minPrice, maxPrice }
        });
    }, []);

    /* Apply Filters - (sorting & filtering) */
    const applyFilters = () => {
        let updatedProducts = [...productsData];

        // Apply sorting
        if (state.sortedValue) {
            switch (state.sortedValue) {
                case 'Latest':
                    updatedProducts = updatedProducts.slice(0, 6);
                    break;
                case 'Featured':
                    updatedProducts = updatedProducts.filter(item => item.tag === 'featured-product');
                    break;
                case 'Top Rated':
                    updatedProducts = updatedProducts.filter(item => item.rateCount > 4);
                    break;
                case 'Price(Lowest First)':
                    updatedProducts.sort((a, b) => a.finalPrice - b.finalPrice);
                    break;
                case 'Price(Highest First)':
                    updatedProducts.sort((a, b) => b.finalPrice - a.finalPrice);
                    break;
                default:
                    throw new Error('Invalid sort option selected');
            }
        }

        // Apply brand filters
        const checkedBrandItems = state.updatedBrandsMenu
            .filter(item => item.checked)
            .map(item => item.label.toLowerCase());

        if (checkedBrandItems.length) {
            updatedProducts = updatedProducts.filter(item => 
                checkedBrandItems.includes(item.brand.toLowerCase())
            );
        }

        // Apply category filters
        const checkedCategoryItems = state.updatedCategoryMenu
            .filter(item => item.checked)
            .map(item => item.label.toLowerCase());

        if (checkedCategoryItems.length) {
            updatedProducts = updatedProducts.filter(item =>
                checkedCategoryItems.includes(item.category.toLowerCase())
            );
        }

        // Apply price filter
        if (state.selectedPrice) {
            updatedProducts = updatedProducts.filter(item => 
                item.finalPrice <= state.selectedPrice.price
            );
        }

        dispatch({
            type: 'FILTERED_PRODUCTS',
            payload: { updatedProducts }
        });
    };

    useEffect(() => {
        applyFilters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.sortedValue, state.updatedBrandsMenu, state.updatedCategoryMenu, state.selectedPrice]);

    // Action Dispatchers
    const setSortedValue = (sortValue) => {
        dispatch({
            type: 'SET_SORTED_VALUE',
            payload: { sortValue }
        });
    };

    const handleBrandsMenu = (id) => {
        dispatch({
            type: 'CHECK_BRANDS_MENU',
            payload: { id }
        });
    };

    const handleCategoryMenu = (id) => {
        dispatch({
            type: 'CHECK_CATEGORY_MENU',
            payload: { id }
        });
    };

    const handlePrice = (event) => {
        const value = event.target.value;
        dispatch({
            type: 'HANDLE_PRICE',
            payload: { value }
        });
    };

    const handleMobSortVisibility = (toggle) => {
        dispatch({
            type: 'MOB_SORT_VISIBILITY',
            payload: { toggle }
        });
    };

    const handleMobFilterVisibility = (toggle) => {
        dispatch({
            type: 'MOB_FILTER_VISIBILITY',
            payload: { toggle }
        });
    };

    const handleClearFilters = () => {
        dispatch({
            type: 'CLEAR_FILTERS'
        });
    };

    // Context values
    const values = {
        ...state,
        setSortedValue,
        handleBrandsMenu,
        handleCategoryMenu,
        handlePrice,
        handleMobSortVisibility,
        handleMobFilterVisibility,
        handleClearFilters,
    };

    return (
        <filtersContext.Provider value={values}>
            {children}
        </filtersContext.Provider>
    );
};

FiltersProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default filtersContext;
export { FiltersProvider };