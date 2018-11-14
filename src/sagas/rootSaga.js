import { takeLatest, call, put } from 'redux-saga/effects';
import { updateSunriseSunset } from '../actions/actions';
import { formatDate } from '../datetime';

function getSunInfo(date) {
    const lat = 49.195;
    const lon = 16.606;
    const locName = 'Brno';

    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=${formatDate(date)}&formatted=0`;
    return fetch(url).then(response => {
        return response.json();
    }).then(response => ({
        sunrise: new Date(response.results.sunrise),
        sunset: new Date(response.results.sunset)
    }));
}

function* changeDate(action) {
    const info = yield call(getSunInfo, action.date);
    yield put(updateSunriseSunset(info.sunrise, info.sunset));
}

function* rootSaga() {
    yield takeLatest('CHANGE_DATE', changeDate);
}

export default rootSaga;
