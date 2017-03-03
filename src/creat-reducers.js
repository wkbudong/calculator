/**
 * Created by Administrator on 2017/3/3.
 */
export default function createReducer(initialState, actionHandlers) {
    return (state = initialState, action) => {
        // 判断actionHandlers中是否对应的action
        const reduceFn = actionHandlers[action.type];
        if (!reduceFn) return state;
        console.log({...state, ...reduceFn(state, action)});
        return {...state, ...reduceFn(state, action)};
    };
}
