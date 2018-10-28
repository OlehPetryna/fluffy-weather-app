import * as actionsTypes from './actionTypes';
import { combineReducers } from 'redux';

const initialState = {
    cities: [],
};

const reducer = (state = initialState, actions) => {
    switch(actions.type) {
        case actionsTypes.ADD_CITIES: { return Object.assign({}, state, { cities: actions.payload.response.responses }) }
        default: return state;
    }
    return state;
};

export const rootReducer = combineReducers({ result: reducer});