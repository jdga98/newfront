export const data = (state = { data: [] }, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state
      };
    default:
      return state;
  }
};
