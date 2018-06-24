import React, {Component} from 'react';
import '../App.css';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <div>
    <Welcome name="Sara" />
    <Welcome name="Cahal" />
    <Welcome name="Edite" />
</div>

// eslint-disable-next-line
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />

    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function formatDate(date) {
  return date;
}

class Example4 extends Component {

    render() {
        return (
            element
        );
    }
}

export default Example4;
