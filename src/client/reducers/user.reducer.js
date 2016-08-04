import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../actions/user.actions';

const initialState = JSON.parse(window.localStorage.getItem('rr_user')) || {};

export default function userstate(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      // TODO
      return {};

    case LOGIN_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        isAuthenticated: action.payload.isAuthenticated,
      };

    case LOGIN_FAIL:
      // TODO
      return {};

    case LOGOUT_SUCCESS:
      // TODO
      return {};

    default:
      return state;
  }
}
