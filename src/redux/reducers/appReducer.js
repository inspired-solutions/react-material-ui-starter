import { LOADING } from '../actionTypes';

const initialState = {
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.loading
      };

    default:
      return state;
  }
};