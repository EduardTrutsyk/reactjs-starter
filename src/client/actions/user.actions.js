import {
  ROUTING,
} from '../middlewares/redirect';

export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';


export function login(payload) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          name: payload.name,
          isAuthenticated: true,
        },
      });

      dispatch({
        type: ROUTING,
        payload: {
          method: 'push', // or replace
          nextUrl: '/admin',
        },
      });
    }, 2000);
  };
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}
