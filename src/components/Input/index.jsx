import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    const { dataTestid, text, type, value, onChange, name } = this.props;

    return (
      <label htmlFor={ name }>
        {text}
        <input
          id={ name }
          name={ name }
          type={ type }
          value={ value }
          data-testid={ dataTestid }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  dataTestid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
