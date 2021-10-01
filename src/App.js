import React, { useState } from 'react';

import Card from './components/Card';
import Form from './components/Form';

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

  return (
    <div>
      <Form onInputChange={ handleChange } />
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
    </div>
  );
}

export default App;
