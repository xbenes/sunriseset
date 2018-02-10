import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import SolarCalc from 'solar-calc';
import { PlainDate, PlainTime } from './datetime';

export default class extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            lat: 49.195,
            lon: 16.606,
            locName: 'Brno'
        };
    }

    componentWillMount() {
        this.updateValue(new Date());
    }

    handleDayClick(date) {
        this.updateValue(date);
    }

    updateValue(date) {
        const calc = new SolarCalc(date, this.state.lat, this.state.lon);
        this.setState({
            date,
            sunrise: calc.sunrise,
            sunset: calc.sunset
        })
    }

    render() {
        return (
            <div>
                <DayPicker
                    selectedDays={[this.state.date]}
                    onDayClick={this.handleDayClick.bind(this)}
                />
                <div>
                    <PlainDate date={this.state.date} />
                </div>
                <div>
                    <PlainTime date={this.state.sunrise} />
                </div>
                <div>
                    <PlainTime date={this.state.sunset} />
                </div>
            </div>
        );
    }
}
