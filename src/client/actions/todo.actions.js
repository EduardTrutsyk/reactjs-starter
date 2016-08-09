import * as types from '../constants/actions.types';

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text,
  };
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    id,
  };
}

export function completeTodo(id) {
  return {
    type: types.COMPLETE_TODO,
    id,
  };
}
