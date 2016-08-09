import React, { PureComponent, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../../actions/todo.actions';
import TodoHeader from './TodoHeader';
import TodoSection from './TodoSection';

import './index.scss';

class Todo extends PureComponent {
  render() {
    const { todos, actions } = this.props;
    return (
      <div className="todoapp">
        <TodoHeader addTodo={actions.addTodo}/>
        <TodoSection actions={actions} todos={todos}/>
      </div>
    );
  }
}

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
