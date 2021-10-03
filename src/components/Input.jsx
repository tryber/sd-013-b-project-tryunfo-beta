import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { placeHolder, type, name, dataTestId, min, max,
      value, id, text, setValue } = this.props;
    return (
      <label htmlFor={ id }>
        {text}
        <input
          type={ type }
          onChange={ ({ target }) => setValue(target) }
          name={ name }
          id={ id }
          data-testid={ dataTestId }
          placeholder={ placeHolder }
          min={ min }
          max={ max }
          value={ value }
          checked={ type === 'checkbox' && value }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  dataTestId: '',
  min: 0,
  max: undefined,
  text: '',
  placeHolder: '',
};

Input.propTypes = {
  id: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  setEmail: PropTypes.func,
  dataTestId: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Input;
