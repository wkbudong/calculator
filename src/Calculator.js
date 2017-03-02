/**
 * Created by Administrator on 2017/3/2.
 */
import React, { Component } from 'react';
import { createStore } from 'redux';
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
    add(){
            store.dispatch({type: 'ADD'})
    }
    minus(){
            store.dispatch({type: 'MIUNS'})
    }
    render(){
        return (
            <div>
                <p>{store.getState()}</p>
                <button onClick={this.add}>plus</button>
                <button onClick={this.minus}>minus</button>
            </div>
        )
    }
}


