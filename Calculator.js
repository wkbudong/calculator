/**
 * Created by Administrator on 2017/3/2.
 */
import React, { Component } from 'react';
import {createstore } from 'redux';
// import React, { Component } from 'react';
const reducer= (state=0,action)=>{
    switch (action.type){
        case 'ADD':return state+1;
        case 'MIUNS':return state-1;
        default:return state;
    }
};
const store = createStore(reducer);
export default class Calculator extends Component{

    render(){
        add(){
            store.dispatch({type: 'ADD'})
        };
        minus(){
            store.dispatch({type: 'MIUNS'})
        };
        return (
            <div>
                <h1>{store.getState()}</h1>
                <button onclick={this.add}>+</button>
                <button onclick={this.minus}>-</button>
            </div>
        )
    }
}


