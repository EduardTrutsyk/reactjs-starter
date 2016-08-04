import { browserHistory } from 'react-router';

export const ROUTING = 'ROUTING';

export const redirect = store => next => action => {
  if (action.type === ROUTING && action.payload.method in browserHistory) {
    browserHistory[action.payload.method](action.payload.nextUrl);
  }

  return next(action);
};
