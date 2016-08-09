import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

import './todoItem.scss';

class TodoItem extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false,
    };

    this.handleSave = ::this.handleSave;
    this.handleCompleteTodo = ::this.handleCompleteTodo;
    this.handleDeleteTodo = ::this.handleDeleteTodo;
    this.handleDoubleClick = ::this.handleDoubleClick;
  }

  handleCompleteTodo() {
    this.props.completeTodo(this.props.todo.id);
  }

  handleDeleteTodo() {
    this.props.deleteTodo(this.props.todo.id);
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(text) {
    const { id } = this.props.todo;

    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const { todo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          editing={this.state.editing}
          onSave={this.handleSave}
          text={todo.text}
        />
      );
    } else {
      element = (
        <div className="view">
          <input
            checked={todo.completed}
            className="toggle"
            id={`todo-item__checkbox-${todo.id}`}
            onChange={this.handleCompleteTodo}
            type="checkbox"
          />
          <label
            htmlFor={`todo-item__checkbox-${todo.id}`}
            onDoubleClick={this.handleDoubleClick}
          >
            {todo.text}
          </label>
          <button
            className="destroy"
            onClick={this.handleDeleteTodo}
          />
        </div>
      );
    }

    const itemClassName = {
      completed: todo.completed,
      editing: this.state.editing,
    };
    return (
      <li className={classnames(itemClassName)}>
        {element}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  // editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
