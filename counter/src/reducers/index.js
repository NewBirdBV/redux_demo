let i = 0;
export default (state = {value:i}, action) => {
  switch (action.type) {
      case "INCREMENT":
      return {...state,value:i++};
      case "DECREMENT":
      return {...state,value:i--};
      default:
        return state
  }
};
