import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example1 from './main_concepts/1_hello_world/Example1';
import Example2 from './main_concepts/2_jsx/Example2';
import Example3 from './main_concepts/3_rendering_elements/Example3'
import Example4 from './main_concepts/4_components_and_pros/Example4'
import Example5 from './main_concepts/5_state_and_lifecycle/Example5'
import Example6 from './main_concepts/6_handling_events/Example6'
import Example7 from './main_concepts/7_conditional_rendering/Example7'
import Example8 from './main_concepts/8_lists_and_keys/Example8'
import Example9 from './main_concepts/9_forms/Example9'
import Example10 from './main_concepts/10_lifting_state_up/Example10'
import Example11 from './main_concepts/11_composition_vs_Inheritance/Example11'
import Example12 from './main_concepts/12_thinking_in_react/Example12'
import Example_Refs_and_the_DOM from "./advanced_guides/refs_and_the_dom/Example_Refs_and_the_DOM";

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

          <h1 className="App-example-category">Main Concepts</h1>

          <h1 className="App-example">Example1: Hello World</h1>
          <Example1/>

          <h1 className="App-example">Example2: Introducing JSX</h1>
          <Example2/>

          <h1 className="App-example">Example3: Rendering Elements</h1>
          <Example3/>

          <h1 className="App-example">Example4: Components and Props</h1>
          <Example4/>

          <h1 className="App-example">Example5: State and Lifecycle</h1>
          <Example5/>

          <h1 className="App-example">Example6: Handling Events</h1>
          <Example6/>

          <h1 className="App-example">Example7: Conditional Rendering</h1>
          <Example7/>

          <h1 className="App-example">Example8: Lists and Keys</h1>
          <Example8/>

          <h1 className="App-example">Example9: Forms</h1>
          <Example9/>

          <h1 className="App-example">Example10: Lifting State Up</h1>
          <Example10/>

          <h1 className="App-example">Example11: Composition vs Inheritance</h1>
          <Example11/>

          <h1 className="App-example">Example12: Thinking In React</h1>
          <Example12/>


          <h1 className="App-example-category">Anvanced Guides</h1>
          <h1 className="App-example">Example_Refs_and_the_DOM</h1>
          <Example_Refs_and_the_DOM/>

      </div>
    );
  }
}

export default App;
