const initialState = { users: [] };

let lastUser = {};
let firstUser = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_USERS_SUCCESS':
      lastUser = action.payload.users[action.payload.users.length - 1];
      [firstUser] = action.payload.users;
      return {
        ...state,
        users: action.payload.users,
        sinceCurent: firstUser.id - 1,
        sinceNext: lastUser.id
      };

    case 'NEXT_PAGE':
      lastUser = action.payload.users[action.payload.users.length - 1];
      [firstUser] = action.payload.users;
      return {
        ...state,
        users: action.payload.users,
        sinceCurent: firstUser.id - 1,
        sinceNext: lastUser.id
      };
    default:
      return state;
  }
};
