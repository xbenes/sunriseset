import { render } from 'react-dom';
import React from 'react';
import '../css/style.css';

import Sun from './sun';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

const wrapper = document.getElementById('app');

if (wrapper) {
    render(
         <Provider store={store}>
            <Sun />
        </Provider>
    , wrapper);
}
