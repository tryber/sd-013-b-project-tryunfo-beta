import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { placeHolder, name, dataTestId,
      value, id, text, setValue } = this.props;
    return (
      <label htmlFor={ id }>
        {text}
        <textarea
          onChange={ ({ target }) => setValue(target.value) }
          name={ name }
          id={ id }
          data-testid={ dataTestId }
          placeholder={ placeHolder }
          value={ value }
        />
      </label>
    );
  }
}

TextArea.defaultProps = {
  dataTestId: '',
  text: '',
  placeHolder: '',
};

TextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  dataTestId: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string,
}.isRequired;

export default TextArea;
