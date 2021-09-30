import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  renderOptions(option) {
    return (<option key={ option } value={ option }>{option}</option>);
  }

  render() {
    const { options, placeHolder, name, dataTestId,
      value, id, text, setValue } = this.props;
    return (
      <label htmlFor={ id }>
        {text}
        <select
          onChange={ ({ target }) => setValue(target.value) }
          name={ name }
          id={ id }
          data-testid={ dataTestId }
          placeholder={ placeHolder }
          value={ value }
        >
          {options.map((option) => this.renderOptions(option))}
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  options: [],
  dataTestId: '',
  text: '',
  placeHolder: '',
};

Select.propTypes = {
  options: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  dataTestId: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default Select;
