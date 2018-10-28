import * as actions from './actionTypes'
import { cities } from './const';

export const fetchCities = () => async(dispatch) => {
    let url= 'https://api.aerisapi.com/batch?requests=';
    cities.forEach(city => {
        url = `${url}/forecasts/?p=${city.toLowerCase()},ua,`
    });
    const citiesForecast = await fetch(`${url}&client_secret=wDrfTgr9ZzebkTNIvO48UnUa9yfu2vraJfP55TUK&client_id=YteWfr85iX95Bd5ljQ2z7`, {
            method: 'GET',
        });
    dispatch({ type: actions.ADD_CITIES, payload: await citiesForecast.json() });
};