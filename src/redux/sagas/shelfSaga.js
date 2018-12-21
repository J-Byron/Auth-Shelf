import {put as dispatch, takeEvery, call} from 'redux-saga/effects';
import axios from 'axios';


function* getItems() {
    try {
        const itemsResponse = yield call(axios.get, '/api/shelf');
        yield dispatch({type: 'SET_ITEMS', payload: itemsResponse.data});
    } catch(error) {
        console.log('error in getItems saga:', error);
    }
}

function* postItem (action) {
    try {
        console.log('posting action: ', action.payload);
        
        // post item to axios
        yield call(axios.post,'/api/shelf', action.payload);
        
        // Reupdate state
        yield dispatch({type:'FETCH_ITEMS'})

    } catch (error) {
        console.log(error);
    }
}


function* deleteItems(action) {
    try {
        console.log('deleting action', action.payload);
        yield call(axios.delete, `/api/shelf/${action.payload}`);
        yield dispatch({type: 'FETCH_ITEMS'});
    } catch(error) {
        console.log('error in delete saga:', error);
    }
}

function* shelfSaga() {
       yield takeEvery('FETCH_ITEMS', getItems);
       yield takeEvery('POST_ITEM', postItem);
       yield takeEvery('DELETE_ITEMS', deleteItems);
}


export default shelfSaga;