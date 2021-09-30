import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };
  }

  handleChange = ({ target: { name, value, type, checked } }) => {
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  }

  render() {
    const defaultProps = this.state;
    return (
      <div>
        <Form { ...defaultProps } onInputChange={ this.handleChange } />
        <Card { ...defaultProps } />
      </div>
    );
  }
}

export default App;
