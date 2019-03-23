
import { createStore, applyMiddleware } from 'redux';


// import reducer from '../reducer/getList';
import reducer from '../reducer/getList';
// Saga
import createSagaMiddleware from 'redux-saga';
import {watchAddItem, watchGetList, watchDeleteItem, watchCheckOff, watchChooseStore, watchAllData} from '../sagas/saga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAddItem);
sagaMiddleware.run(watchGetList);
sagaMiddleware.run(watchDeleteItem);
sagaMiddleware.run(watchCheckOff);
sagaMiddleware.run(watchChooseStore);
sagaMiddleware.run(watchAllData);


export default store;



























