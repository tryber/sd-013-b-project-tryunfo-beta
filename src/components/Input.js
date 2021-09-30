import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { id, testId, type, labelText, onChange, value } = this.props;

    return (
      <label htmlFor={ id }>
        {labelText}
        <input
          type={ type }
          id={ id }
          name={ id }
          data-testid={ testId }
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Input;
