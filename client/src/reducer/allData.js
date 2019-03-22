import initialState from "../store/state";


const allData = (state = initialState, action) => {
  console.log("##################333")
  const newState = { ...state };

    // I only have one action: GET_LIST-ASYNC because
    // I want it to always return the complete list to store
 

  

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
      if( storeInfo[k].strikeThru === false ) {
        // console.log("this one is false")
        // console.log(action.val)
        count++
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


  return newState;
};

export default allData;











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
