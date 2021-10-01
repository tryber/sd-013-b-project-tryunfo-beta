import React, { useState } from 'react';

import Card from './components/Card';
import Form from './components/Form';

import './App.css';

const appInitialState = {
  name: '',
  description: '',
  attr1: 0,
  attr2: 0,
  attr3: 0,
  image: '',
  rare: 'normal',
  trunfo: false,
};

function App() {
  const [appState, setAppState] = useState(appInitialState);
  const [cards, setCards] = useState([]);
  const [hasTrunfo, setHasTrunfo] = useState(false);

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setAppState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const checkTextInputs = () => {
    const { name, description, image, rare } = appState;
    if (name === '' || description === '' || image === '' || rare === '') {
      return true;
    }
    return false;
  };

  const checkNumberInputs = () => {
    const { attr1, attr2, attr3 } = appState;
    const attr1ToNumber = Number(attr1);
    const attr2ToNumber = Number(attr2);
    const attr3ToNumber = Number(attr3);
    const sumAttributes = attr1ToNumber + attr2ToNumber + attr3ToNumber;
    const MAX_ATTR_SUM = 210;
    const MAX_ATTR = 90;
    const MIN_ATTR = 0;
    if (sumAttributes > MAX_ATTR_SUM
      || ((attr1ToNumber <= MIN_ATTR || attr1ToNumber > MAX_ATTR)
        || (attr2ToNumber <= MIN_ATTR || attr2ToNumber > MAX_ATTR)
        || (attr3ToNumber <= MIN_ATTR || attr3ToNumber > MAX_ATTR))) {
      return true;
    }
    return false;
  };

  const handleButton = () => {
    const textInputs = checkTextInputs();
    const numberInputs = checkNumberInputs();
    if (textInputs || numberInputs) {
      return true;
    }
    return false;
  };

  const handleSave = () => {
    setCards((prevState) => [...prevState, appState]);
    setAppState(appInitialState);
    if (appState.trunfo) {
      setHasTrunfo(true);
    }
  };

  const handleDelete = (cardName, isTrunfo) => {
    setCards((prevState) => [...prevState.filter((card) => card.name !== cardName)]);
    if (isTrunfo) {
      setHasTrunfo(false);
    }
  };

  return (
    <main className="app-body">
      <Form
        cardName={ appState.name }
        cardDescription={ appState.description }
        cardAttr1={ appState.attr1 }
        cardAttr2={ appState.attr2 }
        cardAttr3={ appState.attr3 }
        cardImage={ appState.image }
        cardRare={ appState.rare }
        cardTrunfo={ appState.trunfo }
        hasTrunfo={ hasTrunfo }
        onInputChange={ handleChange }
        isSaveButtonDisabled={ handleButton() }
        onSaveButtonClick={ handleSave }
      />
      <Card
        cardName={ appState.name }
        cardDescription={ appState.description }
        cardAttr1={ appState.attr1 }
        cardAttr2={ appState.attr2 }
        cardAttr3={ appState.attr3 }
        cardImage={ appState.image }
        cardRare={ appState.rare }
        cardTrunfo={ appState.trunfo }
      />
      <div>
        {cards.length && cards.map((card) => (
          <div key={ card.name }>
            <Card
              cardName={ card.name }
              cardDescription={ card.description }
              cardAttr1={ card.attr1 }
              cardAttr2={ card.attr2 }
              cardAttr3={ card.attr3 }
              cardImage={ card.image }
              cardRare={ card.rare }
              cardTrunfo={ card.trunfo }
            />
            <button
              data-testid="delete-button"
              type="button"
              onClick={ () => handleDelete(card.name, card.trunfo) }
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
