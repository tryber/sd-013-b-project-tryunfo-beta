import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { text, name, value, onChange, dataTestid } = this.props;
    return (
      <label htmlFor={ name }>
        {text}
        <input
          type="checkbox"
          id={ name }
          name={ name }
          checked={ value }
          onChange={ onChange }
          data-testid={ dataTestid }
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default Checkbox;
