import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const MIN_ATTR = 0;
const MAX_ATTR = 90;
const MAX_POINTS = 210;
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
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleChange = ({ target: { name, value, type, checked } }) => {
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, () => this.validateInputs());
  }

  isInputValid = (input) => !!input;

  setRangeBetween0to90 = (attr) => (Number(attr) >= MIN_ATTR && Number(attr) <= MAX_ATTR);

  setMaxPoints = (attr1, attr2, attr3) => (
    Number(attr1) + Number(attr2) + Number(attr3) <= MAX_POINTS
  );

  validateInputs = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const { isInputValid, setRangeBetween0to90, setMaxPoints } = this;
    const setDisabled = (
      isInputValid(cardName)
      && isInputValid(cardDescription)
      && setRangeBetween0to90(cardAttr1)
      && setRangeBetween0to90(cardAttr2)
      && setRangeBetween0to90(cardAttr3)
      && isInputValid(cardImage)
      && isInputValid(cardRare)
      && setMaxPoints(cardAttr1, cardAttr2, cardAttr3)
    );

    this.setState({ isSaveButtonDisabled: !setDisabled });
  }

  render() {
    const defaultProps = this.state;
    return (
      <div>
        <Form
          { ...defaultProps }
          onInputChange={ this.handleChange }
        />
        <Card { ...defaultProps } />
      </div>
    );
  }
}

export default App;
