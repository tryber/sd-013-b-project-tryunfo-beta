import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, id, text } = this.props;
    return (
      <label htmlFor={ id }>
        { text }
        <input
          type={ type }
          data-testid={ id }
          id={ id }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
}.isRequired;

export default Input;
