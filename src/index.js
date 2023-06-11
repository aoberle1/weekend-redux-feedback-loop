import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// variable used to reset state after form submit
const initialState = [];

// creating feedback reducer, state is equal to initialState variable which is an empty array
const feedback = (state = initialState, action) => {
    // if else listeners for dispatch requests from feeling, understanding, support, and comments components
    if (action.type === 'ADD_FEELING') {
        console.log(`The feeling value entered in store was: ${action.payload}`)
        // action.payload is state variable feeling from feeling component
        // using spread operator to insert action.payload into state array
        return [...state, action.payload];
    } else if (action.type === 'ADD_UNDERSTANDING') {
        console.log(`The understanding value entered in store was: ${action.payload}`)
        return [...state, action.payload];
    } else if(action.type === 'ADD_SUPPORT'){
        console.log(`The support value entered in store was: ${action.payload}`)
        return [...state, action.payload]
    } else if(action.type === 'ADD_COMMENT') {
        console.log(`The comment entered in store was: ${action.payload}`)
        return [...state, action.payload]
        // final listener, if RESET, sets state back to an empty array
    } else if(action.type === 'RESET') {
        return initialState
    }
    return state;
}

// creating store with feedback reducer and logger middleware
const storeInstance = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger),
);

// Provider sourced in at top, wrapped around app here
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
