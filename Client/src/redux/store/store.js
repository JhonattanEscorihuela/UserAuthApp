// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducers';

export const store = createStore(
    authReducer,
    composeWithDevTools(applyMiddleware(thunk)
    ));






