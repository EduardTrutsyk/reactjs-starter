import { combineReducers } from 'redux';
import user from './user.reducer';
import todos from './todos.reducer';

const rootReducer = combineReducers({
  todos,
  user,
});

export default rootReducer;
