import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { submit, testId, text } = this.props;

    return (
      <button type={ submit ? 'submit' : 'button' } data-testid={ testId }>
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  submit: PropTypes.bool.isRequired,
  testId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
