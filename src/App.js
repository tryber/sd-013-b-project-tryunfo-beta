import React from 'react';
import Form from './components/Form';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
