/**
 * Created by Administrator on 2017/3/3.
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import createLogger from 'redux-logger';
// Reducers
import * as reducers from './reducer';
import { routerReducer } from 'react-router-redux';

// sagas
// import rootSagas from '../saga';

export default function configureStore(initialState) {

    // const sagaMiddleware = createSagaMiddleware();
    //
    // let middleware;
    // if (__DEBUG__) {
    //     const logger = createLogger();
    //     middleware = applyMiddleware(sagaMiddleware, logger);
    // } else {
    //     middleware = applyMiddleware(sagaMiddleware);
    // }

    // Add the reducer to your store on the `routing` key
    const store = createStore(
        combineReducers({
            ...reducers,
            routing: routerReducer
        })
        // middleware
    );

    // sagaMiddleware.run(rootSagas);

    return store;
}