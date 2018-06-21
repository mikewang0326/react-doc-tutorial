import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JSX from './2_jsx/JSX';
import Render from './3_rendering_elements/Render'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <JSX/>

          <Render/>

      </div>
    );
  }
}

export default App;
