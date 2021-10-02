import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Button extends Component {
  render() {
    const { text, id, disabled, onClick, type } = this.props;
    return (
      <button
        type={ type === 'button' ? 'button' : 'submit' }
        data-testid={ id }
        id={ id }
        disabled={ disabled }
        onClick={ onClick }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
}.isRequired;

export default Button;
