const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return state.mylist.find(item => item.id === action.payload.id)
        ? state
        : {
            ...state,
            mylist: [...state.mylist, action.payload],
            trends: state.trends.filter(item => item.id !== action.payload.id),
            originals: state.originals.filter(item => item.id !== action.payload.id),
          };

    case "DELETE_FAVORITE":
      return {
        ...state,
        mylist: state.mylist.filter(items => items.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
