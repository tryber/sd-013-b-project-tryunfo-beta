import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { text, id, value, onChange, name } = this.props;
    const optionsArray = ['Normal', 'Raro', 'Muito raro'];
    return (
      <label htmlFor={ id }>
        { text }
        <select
          name={ name }
          id={ id }
          data-testid={ id }
          value={ value }
          onChange={ onChange }
        >
          { optionsArray.map((option) => (
            <option key={ option } value={ option.toLowerCase() }>{ option }</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Select;
