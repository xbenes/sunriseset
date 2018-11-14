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

export default combineReducers({
    date: dateReducer,
    sun: sunReducer
});
