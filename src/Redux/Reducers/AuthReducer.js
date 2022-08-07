const INITIAL_STATE = {
  Number: null,
};
export default function AuthReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LoginNumber':
      return {
        Number: action.payload,
      };

    default:
      return state;
  }
}
