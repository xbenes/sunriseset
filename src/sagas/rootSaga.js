import { takeLatest, call, put, select } from 'redux-saga/effects';
import { updateSunriseSunset } from '../actions/actions';
import { formatDate } from '../datetime';

function getSunInfo(date, lat, lon) {
    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=${formatDate(date)}&formatted=0`;
    return fetch(url).then(response => {
        return response.json();
    }).then(response => ({
        sunrise: new Date(response.results.sunrise),
        sunset: new Date(response.results.sunset)
    }));
}

function* changeDate(action) {
    const state = yield select();

    const selected = state.location.location;
    const latlon = state.location.locations[selected];

    const info = yield call(getSunInfo, action.date, latlon.lat, latlon.lon);
    yield put(updateSunriseSunset(info.sunrise, info.sunset));
}

function* changeLocation(action) {
    const state = yield select();
    const date = state.date;

    const selected = action.location;
    const latlon = state.location.locations[selected];

    const info = yield call(getSunInfo, date, latlon.lat, latlon.lon);
    yield put(updateSunriseSunset(info.sunrise, info.sunset));
}

function* rootSaga() {
    yield takeLatest('CHANGE_DATE', changeDate);
    yield takeLatest('CHANGE_LOCATION', changeLocation);
}

export default rootSaga;
