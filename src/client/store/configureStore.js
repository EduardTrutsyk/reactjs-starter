import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import { redirect } from '../middlewares/redirect';

export default function configureStore() {
  const store = compose(
    applyMiddleware(thunkMiddleware, createLogger()),
    applyMiddleware(redirect)
  )(createStore)(rootReducer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
