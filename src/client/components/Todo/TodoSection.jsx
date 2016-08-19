import React, { PureComponent, PropTypes } from 'react';
import TodoItem from './TodoItem';

import './todoSection.scss';
import './todoList.scss';

class TodoSection extends PureComponent {
  static propTypes = {
    todos: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    console.info('TodoSection:render');
    const { todos, actions } = this.props;

    return (
      <section className="main">
        <ul className="todo-list">
          {todos.map(todo =>
            <TodoItem
              completeTodo={actions.completeTodo}
              deleteTodo={actions.deleteTodo}
              editTodo={actions.editTodo}
              key={todo.get('id')}
              todo={todo}
            />
          )}
        </ul>
      </section>
    );
  }
}

export default TodoSection;
