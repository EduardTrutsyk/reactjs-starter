import multireducer from 'multireducer';
import { combineReducers } from 'redux';
import user from './user.reducer';
import todos from './todos.reducer';
import counterButton from './counterButton.reducer';

const rootReducer = combineReducers({
  todos: multireducer({
    todos1: todos,
    todos2: todos,
  }),
  user,
  buttonCounters: multireducer({
    counter1: counterButton,
    counter2: counterButton,
  }),
});

export default rootReducer;
