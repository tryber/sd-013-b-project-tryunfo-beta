import PropTypes from 'prop-types';
import React from 'react';

// import { Container } from './styles';

function Input({ label, name, dataid, type, onChange, value }) {
  return (
    <label htmlFor={ dataid }>
      { label }
      <input
        type={ type }
        name={ name }
        onChange={ onChange }
        data-testid={ dataid }
        value={ value }
      />
    </label>
  );
}

Input.propTypes = {
  dataid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
