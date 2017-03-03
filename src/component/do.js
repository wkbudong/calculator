/**
 * Created by Administrator on 2017/3/3.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
export default class Button extends Component{
    render(){
        return (
            <button>+10</button>
        )
    }
}
