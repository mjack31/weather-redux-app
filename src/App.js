import React, { Component } from 'react';
import './App.css';

import SearchBar from './containers/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container my-3">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
