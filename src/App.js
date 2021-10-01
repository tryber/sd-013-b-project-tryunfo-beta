import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

const ValidationField = [
  'cardName', 'cardDescription', 'cardAttr1', 'cardAttr2', 'cardAttr3', 'cardImage',
  'cardRare',
];

class App extends React.Component {
  constructor(props) {
    super(props);
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
      isSaveButtonDisabled: true,
      cardsSaves: [],
    };
  }

  componentDidUpdate() {
    const { state: { isSaveButtonDisabled } } = this;
    if (isSaveButtonDisabled) {
      this.validationButton();
    }
  }

  handleChangeAttr = (state, validation) => {
    const MaxNumber = 90;
    if (state[validation] < MaxNumber && state[validation] > 0) {
      return false;
    }
  }

  validationButton = () => {
    let som = 0;
    const MaxNumber = 90;
    const limitPont = 210;
    const validacao = ValidationField.map(((validation) => {
      const { state } = this;
      if (validation.includes('cardAttr')) {
        som += Number(state[validation]);
        return state[validation] <= MaxNumber && state[validation] > 0;
      }
      if (som > limitPont) { return false; }
      return !!state[validation];
    })).every((value) => value === true);
    if (validacao) {
      this.setState({ isSaveButtonDisabled: !validacao });
    }
  }

  onInputChange = ({ target: { value, name } }) => {
    if (name === 'cardTrunfo') {
      this.setState((prevState) => ({ [name]: !prevState.cardTrunfo }));
    } else {
      this.setState({ [name]: value });
    }
  }

  clearState = () => {
    this.setState({ cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: true,
      isSaveButtonDisabled: true });
  }

  onSaveButtonClick = () => {
    const { state } = this;
    this.setState((prevState) => ({ cardsSaves: [...prevState.cardsSaves, state] }));
    this.clearState();
  }

  render() {
    return (
      <div className="app">
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
