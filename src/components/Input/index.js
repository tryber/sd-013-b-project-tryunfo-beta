import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, id, text, value, onChange, name } = this.props;
    return (
      <label htmlFor={ id }>
        { text }
        <input
          type={ type }
          data-testid={ id }
          id={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
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
  name: PropTypes.string,
}.isRequired;

export default Input;
