/**
 * Created by Administrator on 2017/3/3.
 */
import Calculator from '../component/Calculator';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as allActions from '../action';
const actionsKey = Object.keys(allActions).slice(1);

class CalculatorContainer extends Component{
    render(){
        return (
            <div>
                <Calculator />
            </div>
        )
    }
}

export default connect(state => state, (dispatch) => {
    return {
        actions: actionsKey.reduce((object, key) => {
            return Object.assign(object, { [key]: bindActionCreators(allActions[key], dispatch) });
        }, {})
    }
})(CalculatorContainer);