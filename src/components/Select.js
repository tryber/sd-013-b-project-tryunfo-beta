import PropTypes from 'prop-types';
import React from 'react';

// import { Container } from './styles';

function Select({ name, onChange, option, dataid, label }) {
  return (
    <label htmlFor={ name }>
      { label }
      <select
        onChange={ onChange }
        data-testid={ dataid }
        name={ name }
        value="raro"
      >
        { option.map((item, index) => (
          <option key={ index } value={ item }>
            { item }
          </option>
        )) }
      </select>
    </label>
  );
}

Select.propTypes = {
  dataid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  option: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  label: PropTypes.func.isRequired,
};

export default Select;
