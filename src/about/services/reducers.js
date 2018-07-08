const initialState = { user: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOADED':
      return {
        user: action.payload.user
      };
    default:
      return state;
  }
};
