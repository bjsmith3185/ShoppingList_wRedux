import initialState from "../store/state";

const setData = (state = initialState, action) => {
  const newState = { ...state };

  // reducer for all data
  if (action.type === "SET_ALL_DATA") {
    // console.log("reducer, getting list");
    // console.log(action.val);
    
    return {
      ...state,
      myStore: action.val.store,
      countRemaining: action.val.countRemaining,
      allList: action.val.allList,
      storeList: action.val.storeList,
      storeNames: action.val.storeNames,
      name: action.val.name
    };
  }

  // reducer for setting storelist, count
  if (action.type === "SET_STORELIST_COUNT") {
    // console.log("reducer, UPDATE list");
    // console.log(action.val);
     return {
      ...state,
      storeList: action.val.storeList,
      countRemaining: action.val.countRemaining
    };
  }

  // reducer for setting storelist, count, store
  if (action.type === "SET_STORELIST_COUNT_STORE") {
    // console.log("reducer, all data");
    // console.log(action.val);


    return {
      ...state,
      // list: listArray,
      countRemaining: action.val.countRemaining,
      // name: action.val.name,
      myStore: action.val.myStore,
      storeList: action.val.storeList,
      // storeNames: action.val.storeNames,
    };
  }

  return newState;
};

export default setData;
