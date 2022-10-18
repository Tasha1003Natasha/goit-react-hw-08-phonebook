import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// axios.defaults.baseURL = 'https://db-contacts-project-1.herokuapp.com';

export const tokenAuth = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
