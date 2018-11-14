import 'babel-polyfill';
import { render } from 'react-dom';
import React from 'react';
import '../css/style.css';

import Sun from './sun';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);


const wrapper = document.getElementById('app');

if (wrapper) {
    render(
         <Provider store={store}>
            <Sun />
        </Provider>
    , wrapper);
}
