/**
 * Created by Administrator on 2017/3/3.
 */
import { take, put, call, fork, select, takem } from 'redux-saga/effects';
// import * as constants from '../constant';
import * as actions from '../action';
// import { api } from '../util/fetch';
import { ep } from '../create-events';

export function* getCal() {
    while(true) {
        try {
            let { limit, offset } = yield take(constants.media.GET_MEDIA_LIST);
            let uri = `${BASE_URI}/list`;
            let { ok, data: { rows, count }} = yield call(api, uri, {limit, offset}, 'GET');
            yield put({
                type: constants.media.GET_MEDIA_LIST_SUCCESS,
                rows,
                count
            });
        } catch (error) {
            console.warn('get media list error', error);
        }
    }
}


export default function getCal() {
    return [
        fork(getCal)
    ];
}
