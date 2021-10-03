import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Form from './components/Form';

const MAX_NUMBER = 90;
const MAX_SUM = 210;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      onInputChange: ({ target }) => {
        const { name, value } = target;
        const { cardTrunfo } = this.state;
        if (name === 'cardTrunfo') {
          this.setState({ cardTrunfo: !cardTrunfo });
        } else {
          this.setState({ [name]: value },
            () => {
              this.checkSaveBtn();
            });
        }
      },
      onSaveButtonClick: () => {
        this.checkTrunfo();
        this.addCardToList();
        this.setState({
          cardName: '',
          cardDescription: '',
          cardAttr1: 0,
          cardAttr2: 0,
          cardAttr3: 0,
          cardImage: '',
          cardRare: '',
          cardTrunfo: false,
          isSaveButtonDisabled: true,
        });
      },
      cardList: [],
    };
  }

  addCardToList() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.state;

    const objtToAppend = {
      name: cardName,
      description: cardDescription,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      image: cardImage,
      rarity: cardRare,
      superTrunfo: cardTrunfo,
    };

    this.setState((prevState) => ({
      cardList: [...prevState.cardList, objtToAppend],
    }));
  }

  checkTrunfo() {
    const { cardTrunfo } = this.state;
    if (cardTrunfo === true) this.setState({ hasTrunfo: true });
  }

  checkSaveBtn() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare } = this.state;
    const sumOfCards = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    if (cardName && cardDescription && cardRare && cardImage
      && cardAttr1 >= 0 && cardAttr2 >= 0 && cardAttr3 >= 0
      && cardAttr1 <= MAX_NUMBER && cardAttr2 <= MAX_NUMBER && cardAttr3 <= MAX_NUMBER
      && sumOfCards <= MAX_SUM) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled, onInputChange, onSaveButtonClick,
      cardList } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <CardList cardList={ cardList } />
      </div>
    );
  }
}

export default App;
