import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {};
    }

    handleDayClick(date) {
        this.setState({
            date: date
        });
    }

    render() {
        return (
            <div>
                <div>{String(this.state.date)}</div>
                <DayPicker
                    selectedDays={[this.state.date]}
                    onDayClick={this.handleDayClick.bind(this)}
                />
            </div>
        );
    }
}
