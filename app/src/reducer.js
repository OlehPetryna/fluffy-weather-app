import * as actionsTypes from './actionTypes';
import { combineReducers } from 'redux';
import { cities } from './const';

const initialState = {
    cities: [],
};

const addCityNames = arr => {
    return arr.map((city, index) => ({...city, cityName: cities[index]}));
};

const reducer = (state = initialState, actions) => {
    switch(actions.type) {
        case actionsTypes.ADD_CITIES: { return Object.assign({}, state, { cities: addCityNames(actions.payload.response.responses) }) }
        default: return state;
    }
    return state;
};

export const rootReducer = combineReducers({ result: reducer});