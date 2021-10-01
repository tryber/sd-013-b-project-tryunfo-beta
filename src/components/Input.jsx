import React from 'react';
import PropTypes from 'prop-types';

function Input({ inputName, type, value, onChange, checked }) {
  return (
    <label htmlFor={ `${inputName}-input` }>
      {inputName.charAt(0).toUpperCase() + inputName.slice(1)}
      <input
        type={ type }
        data-testid={ `${inputName}-input` }
        value={ value }
        onChange={ onChange }
        checked={ checked || null }
      />
    </label>
  );
}

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Input;
