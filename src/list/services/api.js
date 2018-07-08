import axios from 'axios';

export default {
  fetchUsers(since = 0) {
    return axios.get(`https://api.github.com/users?per_page=10&since=${since}`);
  }
};
