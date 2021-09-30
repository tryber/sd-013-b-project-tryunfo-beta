import PropTypes from 'prop-types';
import React from 'react';

// import { Container } from './styles';

function TextArea({ value, onChange }) {
  return (
    <label htmlFor="description">
      Descricao
      <textarea
        rows="4"
        cols="40"
        value={ value }
        onChange={ onChange }
        name="description"
        data-testid="description-input"
      />
    </label>
  );
}

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;
