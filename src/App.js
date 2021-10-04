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
    const { state: { hasTrunfo, cardTrunfo } } = this;
    if (cardTrunfo) {
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
    } else {
      this.setState({ cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: '',
        cardTrunfo: false,
        hasTrunfo,
        isSaveButtonDisabled: true });
    }
  }

  onSaveButtonClick = () => {
    const { state } = this;
    this.setState((prevState) => ({ cardsSaves: [...prevState.cardsSaves, state] }));
    this.clearState();
  }

  handleClickDelete = (index) => {
    const { state: { cardsSaves } } = this;
    const copyCardsSave = [...cardsSaves];
    copyCardsSave.splice(index, 1);
    const hasTrunfoVerification = copyCardsSave.some(
      ({ cardTrunfo }) => cardTrunfo === true,
    );
    this.setState({ cardsSaves: [], hasTrunfo: hasTrunfoVerification });
  }

  render() {
    const { state } = this;
    return (
      <div>
        <section className="app">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card { ...this.state } />
        </section>
        <ul>
          {state.cardsSaves.map((card, index) => (
            <li key={ index } data-testid={ `${index}-card-save` }>
              <p>{card.cardName}</p>
              <p>{card.cardDescription}</p>
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => this.handleClickDelete(index) }
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
