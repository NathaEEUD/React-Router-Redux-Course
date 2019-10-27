const reducer = (state, action) => {
  console.log("reducer action::::", action);
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

    case "LOGIN_REQUEST":
      console.log("reducer action.payload::::", action.payload);
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing:
          state.trends.find(item => item.id === Number(action.payload)) ||
          state.originals.find(item => item.id === Number(action.payload)) ||
          {},
      };

    default:
      return state;
  }
};

export default reducer;
