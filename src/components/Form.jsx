import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Inputs from './Inputs';

class Form extends Component {
  render() {
    const { onInputChange, onSaveButtonClick } = this.props;
    const defaultProps = {
      ...this.props,
    };
    return (
      <Inputs
        onInputChange={ onInputChange }
        onSaveButtonClick={ onSaveButtonClick }
        { ...defaultProps }
      />
    );
  }
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
