import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

import './todoItem.scss';

class TodoItem extends PureComponent {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };

    this.handleSave = ::this.handleSave;
    this.handleCompleteTodo = ::this.handleCompleteTodo;
    this.handleDeleteTodo = ::this.handleDeleteTodo;
    this.handleDoubleClick = ::this.handleDoubleClick;
  }

  handleCompleteTodo() {
    this.props.completeTodo(this.props.todo.get('id'));
  }

  handleDeleteTodo() {
    this.props.deleteTodo(this.props.todo.get('id'));
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(text) {
    const id = this.props.todo.get('id');

    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  }

  render() {
    console.info('TodoItem:render');
    const { todo } = this.props;
    const id = todo.get('id');
    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          editing={this.state.editing}
          onSave={this.handleSave}
          text={todo.get('text')}
        />
      );
    } else {
      element = (
        <div className="view">
          <input
            checked={todo.get('completed')}
            className="toggle"
            id={`todo-item__checkbox-${id}`}
            onChange={this.handleCompleteTodo}
            type="checkbox"
          />
          <label
            htmlFor={`todo-item__checkbox-${id}`}
            onDoubleClick={this.handleDoubleClick}
          >
            {todo.get('text')}
          </label>
          <button
            className="destroy"
            onClick={this.handleDeleteTodo}
          />
        </div>
      );
    }

    const itemClassName = {
      completed: todo.get('completed'),
      editing: this.state.editing,
    };
    return (
      <li className={classnames(itemClassName)}>
        {element}
      </li>
    );
  }
}

export default TodoItem;
