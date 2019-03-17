
import {delay} from 'redux-saga/effects';
import { takeLatest, put } from 'redux-saga/effects';

import API from '../utils/API'

// the data paramater should contian the payload from HOME.js
function* addItemAsync(data) {
    console.log("in the async function")
    console.log(data)
    // I can probably put my request to teh server here
    // yield delay(4000);

    // send request to client api file
    const myData = yield API.updateShoppingList(data)

//    console.log(myData)
    yield put({type: 'ADD_ITEM_ASYNC', val: myData.data});

}


export function* watchAddItem() {
    // console.log("in the add_item saga!!!!!!!!!!!!!!!!11")
    yield takeLatest('ADD_ITEM', addItemAsync)
}

//--------------------------------------------------------

function* getListAsync(data) {
    console.log("in the async function for get all list")
    console.log(data)
    // I can probably put my request to teh server here
    // yield delay(4000);

    // send request to client api file
    const myData = yield API.getListItems()

   console.log(myData)
    yield put({type: 'GET_LIST_ASYNC', val: myData.data});

}


export function* watchGetList() {
    // console.log("in the add_item saga!!!!!!!!!!!!!!!!11")
    yield takeLatest('GET_LIST', getListAsync)
}

//-------------------------------------------------------------------





















