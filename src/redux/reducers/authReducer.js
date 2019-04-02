import { LOGIN, LOGIN_ERROR, LOGOUT, REFRESH_TOKEN } from '../actionTypes';

const initialState = {
  id: 0,
  fullName: '',
  avatar: '',
  token: ''
};

export default (state = initialState, action) => {
  switch (action.type) {

    case LOGIN:
      return {
        ...state,
        ...action.payload,
      };

    case LOGIN_ERROR:
      return {
        ...state
      };

    case REFRESH_TOKEN:
      return {
        ...state,
        ...action.payload
      };


    case LOGOUT:
      return {
        ...state,
        initialState
      };

    default:
      return state;
  }
}