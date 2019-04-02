import { LOGIN, LOGIN_ERROR, LOGOUT } from '../actionTypes';
import AuthService from '../../services/AuthService';

const service = new AuthService();

export const login = (username, password) => {
  return async dispatch => {
    try {
      const response = await service.login(username, password);
      const { status, data } = response;

      if (status === 200) {
        dispatch({ type: LOGIN, payload: data });
      } else {
        dispatch({ type: LOGIN_ERROR, payload: data });
      }
    } catch (error) {
      console.error(error);
    }
  };
};

export const logout = () => {
  localStorage.removeItem('auth');

  return { type: LOGOUT };
};
