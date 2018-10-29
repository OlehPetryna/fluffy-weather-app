import React from 'react';
import PropTypes from 'prop-types';

const genericImageStyles = {
    height: '100px',
    width: '100px',
};

const wrapperStyles = {
    height: '128px',
    width: '128px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const iconsMap = {
    night: {
        Clear: '/icons/weather-clear-night.png',
        Fair: '/icons/weather-clear-night.png',
        'Mostly Sunny': '/icons/weather-clear-night.png',
        'Mostly Cloudy': '/icons/weather-clouds-night.png',
        Cloudy: '/icons/weather-clouds-night.png',
        Overcast: '/icons/weather-clouds-night.png',
        Drizzle: '/icons/weather-drizzle-night.png',
        'Partly Cloudy': '/icons/weather-few-clouds-night.png',
        Smoke: '/icons/weather-fog-night.png',
        Fog: '/icons/weather-fog-night.png',
        Haze: '/icons/weather-fog-night.png',
        Mist: '/icons/weather-fog-night.png',
        Rain: '/icons/weather-rain-night.png',
        'Rain showers': '/icons/weather-showers-scattered-night.png',
        Hail: '/icons/weather-big-snow-night.png',
        'Blowing snow': '/icons/weather-big-snow-night.png',
        'Snow showers': '/icons/weather-big-snow-night.png',
        Snow: '/icons/weather-snow-scattered-night.png',
        'Rain/snow mix': '/icons/weather-snow-rain-night.png',
        'Wintry mix': '/icons/weather-storm-night.png',
        'Blowing spray': '/icons/weather-wind-night.png',
    },
    day: {
        Clear: '/icons/weather-clear.png',
        Fair: '/icons/weather-clear.png',
        'Mostly Sunny': '/icons/weather-clear.png',
        'Mostly Cloudy': '/icons/weather-clouds.png',
        Cloudy: '/icons/weather-clouds.png',
        Overcast: '/icons/weather-clouds.png',
        Drizzle: '/icons/weather-drizzle-day.png',
        'Partly Cloudy': '/icons/weather-few-clouds.png',
        Smoke: '/icons/weather-fog.png',
        Haze: '/icons/weather-fog.png',
        Mist: '/icons/weather-fog.png',
        Fog: '/icons/weather-fog.png',
        Rain: '/icons/weather-rain-day.png',
        'Rain showers': '/icons/weather-showers-scattered-day.png',
        Hail: '/icons/weather-big-snow.png',
        'Snow showers': '/icons/weather-big-snow.png',
        'Blowing snow': '/icons/weather-big-snow.png',
        Snow: '/icons/weather-snow-scattered-day.png',
        'Rain/snow mix': '/icons/weather-snow-rain.png',
        'Wintry mix' : '/icons/weather-storm.png',
        'Blowing spray': '/icons/weather-wind.png',
    }
};

const pickRandomIcon = (timeOfDay, weather) => {
    if (/rain/ig.test(weather) || /shower/ig.test(weather)) {
        return iconsMap[timeOfDay]['Rain showers'];
    } else if (/snow/ig.test(weather)) {
        return iconsMap[timeOfDay]['Snow'];
    } else if (/drizzle/ig.test(weather)) {
        return iconsMap[timeOfDay]['Drizzle'];
    } else if (/cloud/ig.test(weather)) {
        return iconsMap[timeOfDay]['Cloudy'];
    } else {
        return iconsMap[timeOfDay]['Clear'];
    }
};

const icon = ({type, timeOfDay, wrapperCss = {}, imageCss = {}}) => {
    return (
        <div style={{...wrapperStyles, ...wrapperCss}}>
            <img
                title={type}
                style={{...genericImageStyles, ...imageCss}}
                src={process.env.PUBLIC_URL + (iconsMap[timeOfDay][type] || pickRandomIcon(timeOfDay, type))}/>
        </div>
    );
};

icon.propTypes = {
    type: PropTypes.string.isRequired,
    timeOfDay: PropTypes.string.isRequired
};


export default icon;