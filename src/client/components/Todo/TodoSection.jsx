import React, { PureComponent, PropTypes } from 'react';
import TodoItem from './TodoItem';

import './todoSection.scss';
import './todoList.scss';

class TodoSection extends PureComponent {
  // constructor(props, context) {
  //   super(props, context);
  //   // this.state = { filter: SHOW_ALL };
  // }

  // handleClearCompleted() {
  //   this.props.actions.clearCompleted();
  // }
  //
  // handleShow(filter) {
  //   this.setState({ filter });
  // }

  // renderToggleAll(completedCount) {
  //   const { todos, actions } = this.props;
  //   if (todos.length > 0) {
  //     return (
  //       <input className="toggle-all"
  //              type="checkbox"
  //              checked={completedCount === todos.length}
  //              onChange={actions.completeAll} />
  //     )
  //   }
  // }

  // renderFooter(completedCount) {
  //   const { todos } = this.props;
  //   const { filter } = this.state;
  //   const activeCount = todos.length - completedCount;
  //
  //   if (todos.length) {
  //     return (
  //       <Footer completedCount={completedCount}
  //               activeCount={activeCount}
  //               filter={filter}
  //               onClearCompleted={this.handleClearCompleted.bind(this)}
  //               onShow={this.handleShow.bind(this)} />
  //     );
  //   }
  // }

  render() {
    const { todos, actions } = this.props;
    // const { filter } = this.state;

    // const filteredTodos = todos; // todos.filter(TODO_FILTERS[filter]);
    // const completedCount = todos.reduce((count, todo) =>
    //     todo.completed ? count + 1 : count,
    //   0
    // );

    return (
      <section className="main">
        <ul className="todo-list">
          {todos.map(todo =>
            <TodoItem
              completeTodo={actions.completeTodo}
              deleteTodo={actions.deleteTodo}
              key={todo.id}
              todo={todo}
            />
          )}
        </ul>
      </section>
    );
  }
}

TodoSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default TodoSection;
