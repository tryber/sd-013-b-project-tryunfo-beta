import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { id, testId, labelText, onChange, value } = this.props;

    return (
      <label htmlFor={ id }>
        {labelText}
        <textarea
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

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default TextArea;
