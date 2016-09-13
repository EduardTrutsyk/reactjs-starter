import * as types from '../constants/actions.types';

export function addTodo(text) {
  return (dispatch) => (dispatch({
    type: types.ADD_TODO,
    text,
  }));
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    id,
  };
}

export function editTodo(id, text) {
  return (dispatch) => {
    fetch('/')
      .then((res) => {
        alert('fetch');
        dispatch({
          type: types.EDIT_TODO,
          id,
          text,
        });
      })
      .catch((error) => {
        console.error(error);
      });
    // return {
    //   type: types.EDIT_TODO,
    //   id,
    //   text,
    // };
  }
}

export function completeTodo(id) {
  return {
    type: types.COMPLETE_TODO,
    id,
  };
}
