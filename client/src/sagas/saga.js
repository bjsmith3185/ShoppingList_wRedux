
import {delay} from 'redux-saga/effects';

import { takeLatest, put } from 'redux-saga/effects';

function* ageUpAsync() {
    console.log("i am here")
    // I can probably put my request to teh server here
    yield delay(4000);



    //------------------------------------------
    yield put({type: 'AGE_UP_ASYNC', val: 1});
}



export function* watchAgeUp() {
    yield takeLatest('AGE_UP', ageUpAsync)
}



























