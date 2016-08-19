import React, { PureComponent, PropTypes } from 'react';
//import { bindActionCreators } from 'redux';
import { bindActionCreators } from 'multireducer';
import { connect } from 'react-redux';
import * as TodoActions from '../../actions/todo.actions';
import TodoHeader from './TodoHeader';
import TodoSection from './TodoSection';
import TodoFooter from './TodoFooter';

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/todoFilters';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed,
};

import './index.scss';

@connect(mapStateToProps, mapDispatchToProps)
class Todo extends PureComponent {

  static propTypes = {
    todos: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  handleClearCompleted() {
    this.props.actions.clearCompleted();
  }

  handleShow(filter) {
    this.setState({ filter });
  }

  render() {
    console.info('Todo:render');
    const { todos, actions, filter } = this.props;
    const completedCount = todos.reduce((count, todo) => (
        todo.get('completed') ? count + 1 : count),
      0);
    const activeCount = todos.size - completedCount;

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);

    return (
      <div className="todoapp">
        <TodoHeader addTodo={actions.addTodo}/>
        <TodoSection actions={actions} todos={filteredTodos}/>
        <TodoFooter
          activeCount={activeCount}
          completedCount={completedCount}
          filter={filter}
          onClearCompleted={this.handleClearCompleted.bind(this)}
          onShow={this.handleShow.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps(state, { as }) {
  return {
    todos: state.todos[as],
    filter: SHOW_ALL,
  };
}

function mapDispatchToProps(dispatch, { as }) {
  return {
    actions: bindActionCreators(TodoActions, dispatch, as),
  };
}

export default Todo;
