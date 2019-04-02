import axios from 'axios';
import store from '../redux/store';
import { logout } from '../redux/actions/authActions';

class Service {
  defaultOptions = {
    baseURL: `${process.env.REACT_APP_API_URL}/api`,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor() {
    this.http = axios.create(this.defaultOptions);

    this.http.interceptors.request.use(config => {
      const token = store.getState().auth.token;

      if (token) {
        config.headers.Authorization =`JWT ${token}`;
      }

      return config;
    }, error => {
      return Promise.reject(error);
    });

    this.http.interceptors.response.use(response => {
      return response;
    }, error => {
      if (error.response.status === 401) {
        store.dispatch(logout());

        console.log('Unauthorized');
      }

      return Promise.reject(error);
    });
  }
}

export default Service;