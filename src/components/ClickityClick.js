import React from 'react';

export default class ClickityClick extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            toggled: false
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                toggled: !previousState.toggled
            }
        })
        }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <p>I have {this.state.hasBeenClicked ? null: 'not'} been clicked!</p>
                <button onClick={this.handleClick}>{this.state.toggled ? 'ON': 'OFF'}</button>
            </div>
        );
    }
}

