import React, {Component} from 'react';
import './App.css';


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const user = {
        firstName: 'Harper',
        lastName: 'Perez',
        avatarUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRpfXdu6uRSYucdhFUukqJbr3MefUM462ziyp0Z73tv9ExtMV'
    };

const element1 = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

const element2 = <img src={user.avatarUrl}></img>;


const element3 = (
    <h1 className="greeting">
        Greeting class!
    </h1>
);

const element4 = React.createElement(
    'h1',
    {className: 'greeting1'},
    'Hello, world!'
);

class JSX extends Component {

    render() {
        return (
            <div className="jsx-div">
                <p className="jsx-intro">
                    This is JSX intro
                </p>

                { element1 }
                { getGreeting() }
                { element2 }
                { element3 }
                { element4 }
            </div>
        );
    }
}

export default JSX;
