import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  render() {
    const { id, testId, isChecked, onChange, labelText } = this.props;

    return (
      <label htmlFor={ id }>
        <input
          id={ id }
          data-testid={ testId }
          name={ id }
          type="checkbox"
          checked={ isChecked }
          onChange={ onChange }
        />
        {labelText}
      </label>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default Checkbox;
