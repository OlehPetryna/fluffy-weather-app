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
        clear: '/icons/weather-clear-night.png',
        clouds: '/icons/weather-clouds-night.png',
        drizzle: '/icons/weather-drizzle-night.png',
        smallClouds: '/icons/weather-few-clouds-night.png',
        fog: '/icons/weather-fog-night.png',
        rain: '/icons/weather-rain-night.png',
        showers: '/icons/weather-showers-scattered-night.png',
        snow: '/icons/weather-big-snow-night.png',
        smallSnow: '/icons/weather-snow-scattered-night.png',
        snowRain: '/icons/weather-snow-rain-night.png',
        storm: '/icons/weather-storm-night.png',
        wind: '/icons/weather-wind-night.png',
    },
    day: {
        clear: '/icons/weather-clear.png',
        clouds: '/icons/weather-clouds.png',
        drizzle: '/icons/weather-drizzle-day.png',
        smallClouds: '/icons/weather-few-clouds.png',
        fog: '/icons/weather-fog.png',
        rain: '/icons/weather-rain-day.png',
        showers: '/icons/weather-showers-scattered-day.png',
        snow: '/icons/weather-big-snow.png',
        smallSnow: '/icons/weather-snow-scattered-day.png',
        snowRain: '/icons/weather-snow-rain.png',
        storm: '/icons/weather-storm.png',
        wind: '/icons/weather-wind.png',
    }
};

const icon = ({type, timeOfDay, wrapperCss = {}, imageCss = {}}) => {
    return (
        <div style={{...wrapperStyles, ...wrapperCss}}>
            <img title={type} style={{...genericImageStyles, ...imageCss}} src={process.env.PUBLIC_URL + iconsMap[timeOfDay][type]}/>
        </div>
    );
};

icon.propTypes = {
    type: PropTypes.string.isRequired,
    timeOfDay: PropTypes.string.isRequired
};


export default icon;