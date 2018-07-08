const initialState = { users: [] };

let lastUser = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_USERS_SUCCESS':
      lastUser = action.payload.users[action.payload.users.length - 1];
      return {
        ...state,
        users: action.payload.users,
        sinceNext: lastUser.id
      };

    case 'NEXT_PAGE':
      lastUser = action.payload.users[action.payload.users.length - 1];
      return {
        ...state,
        users: action.payload.users,
        sinceNext: lastUser.id
      };
    default:
      return state;
  }
};
