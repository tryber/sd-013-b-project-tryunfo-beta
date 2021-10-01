import React, { useState } from 'react';

import Card from './components/Card';
import Form from './components/Form';

import './App.css';

const appInitialState = {
  name: '',
  description: '',
  attr1: '',
  attr2: '',
  attr3: '',
  image: '',
  rare: '',
  trunfo: false,
};

function App() {
  const [appState, setAppState] = useState(appInitialState);

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

  return (
    <main className="app-body">
      <Form onInputChange={ handleChange } isSaveButtonDisabled={ handleButton } />
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
    </main>
  );
}

export default App;
