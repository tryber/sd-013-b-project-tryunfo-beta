import React, { Component } from 'react';

class Inputs extends Component {
  render() {
    return (
      <form>
        <label htmlFor="inpCarta">
          Nome da carta
          <input type="text" name="inpCarta" data-testid="name-input" />
        </label>
        <label htmlFor="descriptionCard">
          Nome da carta
          <input type="textarea" name="descrCard" data-testid="description-input" />
        </label>
      </form>
    );
  }
}

export default Inputs;
