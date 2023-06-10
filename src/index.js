import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const initialState = [];

const feedback = (state = initialState, action) => {
    if (action.type === 'ADD_FEELING') {
        console.log(`The feeling value entered in store was: ${action.payload}`)
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
    } else if(action.type === 'RESET') {
        return initialState
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
