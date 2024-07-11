const initialState = {
  balance: 2490701,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WITHDRAW':
      console.log(state.balance);
      console.log(action.amount);
      return {
        ...state,
        balance: state.balance - action.amount,
      };
    default: return state;
  }
};
export default rootReducer;