const initialState = {
  Count: 0
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "INC") {
    return {
      ...state,
      Count: state.Count + 1
    };
  }
  if (action.type === "DEC") {
    return {
      ...state,
      Count: state.Count - 1
    };
  }
  if (action.type === "RESET") {
    return {
      ...state,
      Count: state.Count * 0
    };
  }
  return state;
};

export default counterReducer;
