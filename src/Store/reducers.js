// reducers.js
const initialState = {
  userId: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_ID":
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
