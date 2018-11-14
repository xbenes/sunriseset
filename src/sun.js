import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import SolarCalc from 'solar-calc';
import { connect } from 'react-redux';
import { PlainDate, PlainTime, formatDate } from './datetime';
import { changeDate } from './actions/actions';

class Sun extends React.Component {
    componentDidMount() {
        this.props.changeDate(new Date());
    }

    handleDayClick(date) {
        this.props.changeDate(date);
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
        if (!this.props.sunrise || !this.props.sunset) {
            return null;
        }

        return (
            <div className="values">
                <div className="updown">
                    <span>↗</span>&nbsp;
                    <PlainTime date={this.props.sunrise} />
                </div>
                <div className="updown">
                    <span>↘</span>&nbsp;
                    <PlainTime date={this.props.sunset} />
                </div>
            </div>
        );
    }

    render() {
       return (
           <div className="main">
               <div className="header">Sunrise/Sunset in Brno</div>
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
    date: state.date,
    sunrise: state.sun ? state.sun.sunrise : null,
    sunset: state.sun ? state.sun.sunset : null
});

const mapDispatchToProps = {
    changeDate
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sun);
