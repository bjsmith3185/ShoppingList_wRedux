import initialState from "../store/state";


const myStore = (state = initialState, action) => {
  const newState = { ...state };

    // I only have one action: GET_LIST-ASYNC because
    // I want it to always return the complete list to store


  

  if (action.type === "SET_STORE_ASYNC") {
    console.log("reducer, set my store");
    console.log(action.val);

   
    return {
      ...state,
      myStore: action.val.myStore,

    };
  }


  return newState;
};

export default myStore;











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
