import api from './api';

export function getUsers() {
  return (dispatch) => {
    api.fetchUsers().then((response) => {
      dispatch({
        type: 'LOAD_USERS_SUCCESS',
        payload: {
          users: response.data
        }
      });
    });
  };
}

export function nextPage(sinceNext) {
  return (dispatch) => {
    api.fetchUsers(sinceNext).then((response) => {
      dispatch({
        type: 'NEXT_PAGE',
        payload: {
          users: response.data
        }
      });
    });
  };
}
