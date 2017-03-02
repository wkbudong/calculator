import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

const reducer= (state=0,action)=>{
    switch (action.type){
        case 'ADD':return state+1;
        case 'MIUNS':return state-1;
        default:return state;
    }
};
const store = createStore(reducer);
class Calculator extends Component{
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
var re=() => {render(
    <Calculator />, document.getElementById('app')
)};
re();
store.subscribe(re)