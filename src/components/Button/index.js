import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Button extends Component {
  render() {
    const { text, id, disabled, onClick } = this.props;
    return (
      <button
        type="submit"
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
}.isRequired;

export default Button;
