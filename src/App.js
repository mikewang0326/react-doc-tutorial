import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example2 from './2_jsx/Example2';
import Example3 from './3_rendering_elements/Example3'
import Example4 from './4_components_and_pros/Example4'
import Example5 from './5_state_and_lifecycle/Example5'
import Example6 from './6_handling_events/Example6'

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

          <h1>example2:</h1>
          <Example2/>

          <h1>example3:</h1>
          <Example3/>

          <h1>example4:</h1>
          <Example4/>

          <h1>example5:</h1>
          <Example5/>

          <h1>example6:</h1>
          <Example6/>

      </div>
    );
  }
}

export default App;
