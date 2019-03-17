import initialState from "../store/state";

const reducer = (state = initialState, action) => {
  const newState = { ...state };


  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      list: state.list.concat({
        item: action.val.item,
        store: action.val.store,
        qty: action.val.qty,
        note: action.val.note
      })
    };
  }

  if(action.type === 'DELETE_ITEM') {
      return {
          ...state,
          list: state.list.filter(element => element.item !== action.val)
      }
  }



  return newState;
};

export default reducer;
