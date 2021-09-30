import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Inputs from './Inputs';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onInputChange } = this.props;
    return (
      <div>
        <Inputs onInputChange={ onInputChange } props={ this.props } />
      </div>
    );
  }
}

Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
