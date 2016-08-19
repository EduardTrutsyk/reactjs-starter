import { List, Map } from 'immutable';
import { uid } from '../utils';

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED,
} from '../constants/actions.types';

const initialState = new Array(10).fill(0).map((item, i) => (Map({
  text: `Todo Item ${i + 1}`,
  completed: i % 3 === 0,
  id: uid(),
})));

export default function reducer(todos = List([]), action) {
  let index;
  switch (action.type) {
    case ADD_TODO:
      return todos.unshift(Map({
        id: uid(),
        completed: false,
        text: action.text,
      }));

    case DELETE_TODO:
      return todos.remove(todos.findIndex((t) => t.get('id') === action.id));

    case EDIT_TODO:
      index = todos.findIndex((t) => t.get('id') === action.id);
      return todos.update(index, (t) => t.set('text', action.text));

    case COMPLETE_TODO:
      index = todos.findIndex((t) => t.get('id') === action.id);
      return todos.update(index, (t) => t.set('completed', !t.get('completed')));

    case COMPLETE_ALL:
      return todos.map(t => t.set('completed', true));

    case CLEAR_COMPLETED:
      return todos.map(t => t.set('completed', false));

    default:
      return todos;
  }
}
