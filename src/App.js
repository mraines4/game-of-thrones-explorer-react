import React from 'react';
import './App.css';
import characters from './characters';
import CharacterList from './CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allChars: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <CharacterList characters={characters} />
        </header>
      </div>
    );
  }
}


export default App;
