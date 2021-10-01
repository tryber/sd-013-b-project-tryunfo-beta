import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, text, name, value, onChange, dataTestid, disabled } = this.props;
    return (
      <label htmlFor={ name }>
        {text}
        <input
          type={ type }
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestid }
          disabled={ disabled }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  disabled: false,
};

export default Input;
