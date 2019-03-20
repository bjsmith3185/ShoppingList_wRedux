import initialState from "../store/state";


const getList = (state = initialState, action) => {
  const newState = { ...state };

    // I only have one action: GET_LIST-ASYNC because
    // I want it to always return the complete list to store


  

  if (action.type === "GET_LIST_ASYNC") {
    console.log("reducer, getting list");
    console.log(action.val);

    let listArray = [];
    for (var i = 0; i < action.val.length; i++) {
      listArray.push(action.val[i]);
    }

    return {
      ...state,
      list: listArray
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
