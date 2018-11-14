import { combineReducers } from 'redux';

const dateReducer = (state = null, action) => {
    switch (action.type) {
        case 'CHANGE_DATE':
            return action.date;
        default:
            return state
    }
};

export default combineReducers({
    date: dateReducer
});
