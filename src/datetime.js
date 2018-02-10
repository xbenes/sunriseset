import React from 'react';

function formatTime(date) {
    const minutes = date.getMinutes();
    return `${date.getHours()}:${minutes<10?'0':''}${minutes}`;
}

function formatDate(date) {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export class PlainDate extends React.Component {
    render() {
        return <span>{formatDate(this.props.date)}</span>;
    }
}

export class PlainTime extends React.Component {
    render() {
        return <span>{formatTime(this.props.date)}</span>;
    }
}
