import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  render() {
    const { dataTestid, text, value, name, onChange, options } = this.props;

    const newOptions = options.map((option) => (
      <option
        value={ option }
        key={ option }
      >
        { option }
      </option>));

    return (
      <label htmlFor={ name }>
        {text}
        <select
          value={ value }
          name={ name }
          onChange={ onChange }
          data-testid={ dataTestid }
          id={ name }
        >
          {newOptions}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
