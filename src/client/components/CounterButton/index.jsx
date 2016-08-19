import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'multireducer';
import { increment } from '../../reducers/counterButton.reducer';

@connect(mapStateToProps, mapDispatchToProps)
class CounterButton extends PureComponent {
  static propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func.isRequired,
  };

  static defaultProps = {
    count: 0,
  };

  render() {
    const { count } = this.props;
    return (
      <button onClick={this.props.increment}>
        You have clicked me {count} time{count === 1 ? '' : 's'}.
      </button>
    );
  }
}

function mapStateToProps(state, { as }) {
  return state.buttonCounters[as];
}

function mapDispatchToProps(dispatch, { as }) {
  return bindActionCreators({ increment }, dispatch, as);
}

export default CounterButton;

