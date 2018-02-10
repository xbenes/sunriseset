import React from 'react';

export default class extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {};

        this.textChange = this.textChange.bind(this);
    }

    textChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input onChange={this.textChange} />
                <div>{this.state.text}</div>
            </div>
        );
    }
}
