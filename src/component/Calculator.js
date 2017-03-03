/**
 * Created by Administrator on 2017/3/2.
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
// import { createStore } from 'redux';
// import React, { Component } from 'react';

export default class Calculator extends Component{
    /*componentDidMount() {
        const { calculator,action }= this.props;
    }*/
    render(){
        const { calculator,action }= this.props;
        return (
            <div>
                <p>{calculator}</p>
                <button onClick={action}>plus</button>
                <button onClick={action}>minus</button>
            </div>
        )
    }
}


