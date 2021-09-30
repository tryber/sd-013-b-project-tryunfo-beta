import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, id, text, value, onChange, checked } = this.props;
    return (
      <label htmlFor={ id }>
        { text }
        <input
          type={ type }
          data-testid={ id }
          id={ id }
          value={ value }
          onChange={ onChange }
          checked={ checked }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
}.isRequired;

export default Input;
