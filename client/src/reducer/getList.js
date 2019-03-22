import initialState from "../store/state";

const getList = (state = initialState, action) => {
  const newState = { ...state };

  // reducer for get list
  if (action.type === "GET_LIST_ASYNC") {
    console.log("reducer, getting list");
    console.log(action.val);

    let listArray = [];
    for (var i = 0; i < action.val.length; i++) {
      listArray.push(action.val[i]);
    }

    let count = 0;
    for (var k = 0; k < action.val.length; k++) {
      if (action.val[k].strikeThru === false) {
        // console.log("this one is false")
        // console.log(action.val)
        count++;
      }
    }

    return {
      ...state,
      list: listArray,
      countRemaining: count
    };
  }

  // reducer for get all data
  if (action.type === "ALL_DATA_ASYNC") {
    console.log("reducer, all data");
    console.log(action.val);
    let storeInfo = action.val.storeData;
    let userInfo = action.val.userData;

    let listArray = [];
    for (var i = 0; i < storeInfo.length; i++) {
      listArray.push(storeInfo[i]);
    }

    let count = 0;
    for (var k = 0; k < storeInfo.length; k++) {
      if (storeInfo[k].strikeThru === false) {
        // console.log("this one is false")
        // console.log(action.val)
        count++;
      }
    }

    return {
      ...state,
      list: listArray,
      countRemaining: count,
      name: userInfo.name,
      myStore: userInfo.myStore
    };
  }

  // reducer for getting my store
  if (action.type === "SET_STORE_ASYNC") {
    console.log("reducer, set my store");
    console.log(action.val);

    return {
      ...state,
      myStore: action.val.myStore
    };
  }

  return newState;
};

export default getList;

// if (action.type === "ADD_ITEM") {
//   console.log("add_item reducer")
//   return {
//     ...state,
//     list: state.list.concat({
//       item: action.val.item,
//       store: action.val.store,
//       qty: action.val.qty,
//       note: action.val.note
//     })
//   };
// }

// if (action.type === "ADD_ITEM_ASYNC") {
//   console.log("async reducer@@@@@@@@@");
//   console.log(action.val);
//   return {
//     ...state,
//     list: state.list.concat({
//       item: action.val.item,
//       store: action.val.store,
//       qty: action.val.qty,
//       note: action.val.note
//     })
//   };
// }

// if (action.type === "DELETE_ITEM") {
//   return {
//     ...state,
//     list: state.list.filter(element => element.item !== action.val)
//   };
// }
