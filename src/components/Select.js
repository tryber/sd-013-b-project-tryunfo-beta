import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { text, name, value, onChange, dataTestid, disabled, options } = this.props;
    return (
      <div className="form-input">
        <label htmlFor={ name }>
          {text}
          <select
            id={ name }
            name={ name }
            value={ value }
            onChange={ onChange }
            data-testid={ dataTestid }
            disabled={ disabled }
          >
            { options.map((option) => (
              <option key={ option } value={ option }>{option}</option>
            )) }
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Select.defaultProps = {
  disabled: false,
};

export default Select;
