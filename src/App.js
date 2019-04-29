import React from 'react';
import './App.css';
import characters from './characters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Search from './Search';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charObj: characters,
      chosen: null
    }
  }
  render() {
    return (
      <div className="App-header">
        <Search handler={this._getInput} />
        <div className="char-box">
          <div className="char-names">
            <CharacterList handleClick={this._getCharClicked} characters={this.state.charObj} />
          </div>
          <div className="char-details">
            {this.state.chosen ? <CharacterDetail chosen={this.state.chosen} /> : null}
          </div>
        </div>
      </div>
    );
  }

  _getCharClicked = (chosen) => {
    console.log(chosen)
    this.setState({
      chosen
    })
  }
  _getInput = (input) => {
    console.log(input)
    const filteredObj = characters.filter( char => (char.name.toLowerCase().includes(input.toLowerCase())))
    this.setState({
      charObj: filteredObj
    })
  }
}


export default App;
