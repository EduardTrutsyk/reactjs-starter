import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';

import './todoTextInput.scss';

class TodoTextInput extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || '',
    };

    this.handleBlur = ::this.handleBlur;
    this.handleChange = ::this.handleChange;
    this.handleSubmit = ::this.handleSubmit;
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    const inputClassName = {
      edit: this.props.editing,
      'new-todo': this.props.newTodo,
    };
    return (
      <input
        autoFocus="true"
        className={classnames(inputClassName)}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
        placeholder={this.props.placeholder}
        type="text"
        value={this.state.text}
      />
    );
  }
}

TodoTextInput.propTypes = {
  editing: PropTypes.bool,
  newTodo: PropTypes.bool,
  onSave: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  text: PropTypes.string,
};

export default TodoTextInput;
