import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Inputs from './Inputs';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onInputChange, onSaveButtonClick } = this.props;
    return (
      <div>
        <Inputs
          onInputChange={ onInputChange }
          props={ this.props }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </div>
    );
  }
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
