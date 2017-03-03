/**
 * Created by Administrator on 2017/3/3.
 */
import createReducer from '../creat-reducers';

let initialState = {
    val:1
};

let actionHandlers = {
    ["add"]:(state,action) => {
        return action.preload;
    },
    ['minus']:(state,action) => {
        return action.preload;
    }
};
export default createReducer(initialState, actionHandlers);