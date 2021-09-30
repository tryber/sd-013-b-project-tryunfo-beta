import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class CheckBox extends Component {
  render() {
    const { type, id, text, onChange, checked, name } = this.props;
    return (
      <label htmlFor={ id }>
        { text }
        <input
          type={ type }
          data-testid={ id }
          id={ id }
          name={ name }
          onChange={ onChange }
          checked={ checked }
        />
      </label>
    );
  }
}

CheckBox.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  name: PropTypes.string,
}.isRequired;

export default CheckBox;
