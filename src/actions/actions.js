import { formatDate } from '../datetime';

export function changeDate(date) {
    return (dispatch, getState) => {
        dispatch({
            type: 'CHANGE_DATE',
            date
        });

        const lat = 49.195;
        const lon = 16.606;
        const locName = 'Brno';

        const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=${formatDate(date)}&formatted=0`;
        return fetch(url).then(response => {
            return response.json();
        }).then(response => {
            dispatch({
                type: 'UPDATE_SUNRISE_SUNSET',
                sunrise: new Date(response.results.sunrise),
                sunset: new Date(response.results.sunset)
            });
        });
    };
}
