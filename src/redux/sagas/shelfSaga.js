import {put, takeEvery, call} from 'redux-saga/effects';
import axios from 'axios';


function* getitems() {
    try {
        const itemsResponse = yield call(axios.get, '/api/shelf');
        yield put({type: 'SET_ITEMS', payload: itemsResponse.data});
    } catch(error) {
        console.log('error in getItems saga:', error);
    }
}




function* shelfSaga() {
       yield takeEvery('FETCH_ITEMS', getItems);
}


export default shelfSaga;