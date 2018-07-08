import axios from 'axios';

export default {
  fetchUser(login) {
    return axios.get(`https://api.github.com/users/${login}`);
  }
};
