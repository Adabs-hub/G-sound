import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import commonReducer from './commonReducer';

// Common Context for managing app-wide state
const commonContext = createContext();

// Initial state definition
const initialState = {
    isFormOpen: false,
    formUserInfo: '',
    isSearchOpen: false,
    searchResults: []
};

/**
 * Common Provider Component
 * Manages form and search functionality state
 */
const CommonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(commonReducer, initialState);

    // Form action creators
    const toggleForm = (toggle) => {
        dispatch({
            type: 'TOGGLE_FORM',
            payload: { toggle }
        });
    };

    const setFormUserInfo = (info) => {
        dispatch({
            type: 'SET_FORM_USER_INFO', 
            payload: { info }
        });
    };

    // Search action creators 
    const toggleSearch = (toggle) => {
        dispatch({
            type: 'TOGGLE_SEARCH',
            payload: { toggle }
        });
    };

    const setSearchResults = (results) => {
        dispatch({
            type: 'SET_SEARCH_RESULTS',
            payload: { results }
        });
    };

    // Context value object
    const values = {
        ...state,
        toggleForm,
        setFormUserInfo,
        toggleSearch,
        setSearchResults
    };

    return (
        <commonContext.Provider value={values}>
            {children}
        </commonContext.Provider>
    );
};

// PropTypes validation
CommonProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default commonContext;
export { CommonProvider };