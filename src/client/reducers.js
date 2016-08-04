import { combineReducers } from 'redux';
import user from './reducers/user.reducer';

export const rootReducer = combineReducers({
  user,
});
