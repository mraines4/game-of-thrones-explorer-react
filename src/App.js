import React from 'react';
import './App.css';
import characters from './characters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charObj: ''
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <CharacterList handleClick={this._getCharClicked} characters={characters} />
        <CharacterDetail />
        </header>
      </div>
    );
  }

  _getCharClicked = (charObj) => {
    console.log(charObj)
    this.setState({
      charObj
    })
  }
}


export default App;
