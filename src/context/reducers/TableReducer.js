const TableReducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_ROW":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default TableReducer;
