import React, {Component} from 'react';
import '../App.css';

const time = new Date().toLocaleTimeString()

function tick() {
    this.time = new Date().toLocaleTimeString() + '1'
}

setInterval(tick, 1000);

class Render extends Component {

    render() {
        return (
            <div className="render-div">
                <h1>Hello, world!</h1>
                <h2>It is { time }.</h2>
            </div>
        );
    }
}

export default Render;
