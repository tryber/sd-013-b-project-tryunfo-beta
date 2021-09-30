import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { text, id, value, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        { text }
        <textarea
          id={ id }
          data-testid={ id }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default TextArea;
