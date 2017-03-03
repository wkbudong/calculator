import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
const initialState = {};
const store = configureStore(initialState);
import {
    CalculatorContainer,
    DoContainer
} from "./container"


render(
    <Provider store={store}>
        <CalculatorContainer />
    </Provider>,document.getElementById("app")
)