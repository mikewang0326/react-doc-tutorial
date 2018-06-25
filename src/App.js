import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example2 from './2_jsx/Example2';
import Example3 from './3_rendering_elements/Example3'
import Example4 from './4_components_and_pros/Example4'
import Example5 from './5_state_and_lifecycle/Example5'
import Example6 from './6_handling_events/Example6'
import Example7 from './7_conditional_rendering/Example7'
import Example8 from './8_lists_and_keys/Example8'
import Example9 from './9_forms/Example9'
import Example10 from './10_lifting_state_up/Example10'
import Example11 from './11_composition_vs_Inheritance/Example11'
import Example12 from './12_thinking_in_react/Example12'

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

          <h1 className="App-example">example2:</h1>
          <Example2/>

          <h1 className="App-example">example3:</h1>
          <Example3/>

          <h1 className="App-example">example4:</h1>
          <Example4/>

          <h1 className="App-example">example5:</h1>
          <Example5/>

          <h1 className="App-example">example6:</h1>
          <Example6/>

          <h1 className="App-example">example7:</h1>
          <Example7/>

          <h1 className="App-example">example8:</h1>
          <Example8/>

          <h1 className="App-example">example9:</h1>
          <Example9/>

          <h1 className="App-example">example10:</h1>
          <Example10/>

          <h1 className="App-example">example11:</h1>
          <Example11/>

          <h1 className="App-example">example12:</h1>
          <Example12/>

      </div>
    );
  }
}

export default App;
