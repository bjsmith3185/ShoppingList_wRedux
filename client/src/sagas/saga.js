import { takeLatest, put } from 'redux-saga/effects';

import API from '../utils/API'




//   Adds an item to the shopping collection
function* addItemAsync(data) {
    console.log(data)
    const myData = yield API.addItem(data.val)
//    console.log(myData)
    yield put({type: 'SET_STORELIST_COUNT', val: myData.data});
}

export function* watchAddItem() {
    yield takeLatest('ADD_ITEM', addItemAsync)
}

//--------------------------------------------------------
//    Load all data when Home page loads
function* loadDataAsync(data) {
    // console.log(data)
    const myData = yield API.loadData(data.val)
    yield put({type: 'SET_ALL_DATA', val: myData.data});
}

export function* watchLoadData() {
    yield takeLatest('LOAD_DATA', loadDataAsync)
}

//--------------------------------------------------------
//  strike thru list item

function* strikeThruAsync(data) {
    const myData = yield API.strikeThru(data.val.id, {strikeThru: data.val.strikeThru})
    yield put({type: 'SET_STORELIST_COUNT', val: myData.data});
}

export function* watchStrikeThru() {
    yield takeLatest('STRIKE_THRU', strikeThruAsync)
}

//-------------------------------------------------------------------

// delete item

function* deleteItemAsync(data) {
    console.log(data.val)
    const myData = yield API.deleteItem(data.val)
    yield put({type: 'SET_STORELIST_COUNT', val: myData.data});
}

export function* watchDeleteItem() {
    yield takeLatest('DELETE_ITEM', deleteItemAsync)
}

//-------------------------------------------------------------------
//  select store
function* setStoreAsync(data) {
    const myData = yield API.selectStore(data.val)
    yield put({type: 'SET_STORELIST_COUNT_STORE', val: myData.data});
}

export function* watchSetStore() {
    yield takeLatest('SET_STORE', setStoreAsync)
}














