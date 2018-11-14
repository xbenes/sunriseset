import { combineReducers } from 'redux';

const dateReducer = (state = null, action) => {
    switch (action.type) {
        case 'CHANGE_DATE':
            return action.date;
        default:
            return state
    }
};

const sunReducer = (state = null, action) => {
    switch (action.type) {
        case 'UPDATE_SUNRISE_SUNSET':
            return {
                sunrise: action.sunrise,
                sunset: action.sunset
            };
        default:
            return state;
    }
};

const INITIAL_LOCATION_STATE = {
    location: 'Brno',
    locations: {
        Brno: { lat: 49.195, lon: 16.606 },
        Praha: { lat: 50.088, lon: 14.420 }
    }
};

const locationReducer = (state = INITIAL_LOCATION_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_LOCATION':
            return {
                location: action.location,
                locations: state.locations
            };
        default:
            return state;
    }
};

export default combineReducers({
    date: dateReducer,
    sun: sunReducer,
    location: locationReducer
});
