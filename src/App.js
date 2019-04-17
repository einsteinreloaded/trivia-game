import React, { Component } from 'react';
import TriviaApp from 'components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Trivia Quiz</h1>
        </header>
        <TriviaApp/>
      </div>
    );
  }
}

export default App;
