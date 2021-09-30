import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { testId, text, disabled, onClick } = this.props;

    return (
      <button
        type="button"
        data-testid={ testId }
        disabled={ disabled }
        onClick={ onClick }
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  testId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
};

export default Button;
