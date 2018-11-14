import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import SolarCalc from 'solar-calc';
import { connect } from 'react-redux';
import { PlainDate, PlainTime, formatDate } from './datetime';
import { changeDate } from './actions/actions';

class Sun extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            lat: 49.195,
            lon: 16.606,
            locName: 'Brno'
        };
    }

    componentDidMount() {
        this.props.changeDate(new Date());
        this.updateValue(new Date());
    }

    handleDayClick(date) {
        this.props.changeDate(date);
        this.updateValue(date);
    }

    updateValue(date) {
        const url = `https://api.sunrise-sunset.org/json?lat=${this.state.lat}&lng=${this.state.lon}&date=${formatDate(date)}&formatted=0`;

        fetch(url).then(response => {
            return response.json();
        }).then(response => {
            this.setState({
                sunrise: new Date(response.results.sunrise),
                sunset: new Date(response.results.sunset)
            });
        });
    }

    renderDayPicker() {
        return (
            <div className="daypicker">
                <DayPicker
                    selectedDays={[this.props.date]}
                    onDayClick={this.handleDayClick.bind(this)}
                />
            </div>
        );
    }

    renderSunriseSunset() {
        if (!this.state.sunrise || !this.state.sunset) {
            return null;
        }

        return (
            <div className="values">
                <div className="updown">
                    <span>↗</span>&nbsp;
                    <PlainTime date={this.state.sunrise} />
                </div>
                <div className="updown">
                    <span>↘</span>&nbsp;
                    <PlainTime date={this.state.sunset} />
                </div>
            </div>
        );
    }

    render() {
       return (
           <div className="main">
               <div className="header">Sunrise/Sunset in {this.state.locName}</div>
               <div className="block">
                   { this.renderDayPicker() }
               </div>
               <div className="block">
                   { this.renderSunriseSunset() }
               </div>
           </div>
       );
    }
}

const mapStateToProps = state => ({
    date: state.date
});

const mapDispatchToProps = {
    changeDate
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sun);
