
import { createStore, applyMiddleware } from 'redux';


import reducer from '../reducer/reducer';
// Saga
import createSagaMiddleware from 'redux-saga';
import {watchAddItem, watchGetList, watchDeleteItem} from '../sagas/saga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(watchAddItem);
sagaMiddleware.run(watchGetList);
sagaMiddleware.run(watchDeleteItem);


export default store;











