import api from './api';

export function getUser(login) {
  return (dispatch) => {
    api.fetchUser(login).then((response) => {
      dispatch({
        type: 'USER_LOADED',
        payload: {
          user: response.data
        }
      });
    });
  };
}
