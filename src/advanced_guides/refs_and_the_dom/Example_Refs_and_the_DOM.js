import React, {Component} from 'react';
import '../../App.css';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render() {
        return <div ref={this.myRef} />;
    }
}

class CustomTextInput1 extends React.Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }

    render() {
        // tell React that we want to associate the <input> ref
        // with the `textInput` that we created in the constructor
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

function MyFunctionalComponent() {
    return <input />;
}

class Parent1 extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }

    render() {
        return (
            <div>
                // This will *not* work!
                <MyFunctionalComponent ref={this.textInput} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>

        );
    }
}

// we recommend using callback refs instead.
class CustomTextInput2 extends React.Component {
    constructor(props) {
        super(props);

        this.textInput = null;

        this.setTextInputRef = element => {
            this.textInput = element;
        };

        this.focusTextInput = () => {
            // Focus the text input using the raw DOM API
            if (this.textInput) this.textInput.focus();
        };
    }

    componentDidMount() {
        // autofocus the input on mount
        this.focusTextInput();
    }

    render() {
        // Use the `ref` callback to store a reference to the text input DOM
        // element in an instance field (for example, this.textInput).
        return (
            <div>
                <input
                    type="text"
                    ref={this.setTextInputRef}
                />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}



const element = <div>
    <h4>Refs</h4>
    <MyComponent/>
    <CustomTextInput1/>
    <h4>Not use the ref attribute on functional components</h4>
    <Parent1/>
    <h4>Callback Refs</h4>
    <CustomTextInput2/>
    </div>

class Example_Refs_and_the_DOM extends Component {
    render() {
        return (
            element
        );
    }
}



export default Example_Refs_and_the_DOM;
