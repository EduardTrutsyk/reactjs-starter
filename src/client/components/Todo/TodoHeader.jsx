import React, { PropTypes, PureComponent, Component } from 'react';
import TodoTextInput from './TodoTextInput';

import './todoHeader.scss';

class TodoHeader extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSave = ::this.handleSave;
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

TodoHeader.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoHeader;
