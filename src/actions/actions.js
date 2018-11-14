export function updateSunriseSunset(sunrise, sunset) {
    return {
        type: 'UPDATE_SUNRISE_SUNSET',
        sunrise,
        sunset
    };
}

export function changeDate(date) {
    return({
        type: 'CHANGE_DATE',
        date
    });
}

export function changeLocation(location) {
    return {
        type: 'CHANGE_LOCATION',
        location
    };
}
