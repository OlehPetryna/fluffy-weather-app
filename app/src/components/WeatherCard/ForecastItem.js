import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Icon from './Icon';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    item: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    imageWrapper: {
        height: '32px',
        width: '32px',
    },
    image: {
        height: '32px',
        width: '32px',
    },
    temperatures: {
        color: '#466384',
        marginRight: '15px'
    },
    nightTemperature: {
        color: '#aaa',
        marginLeft: '5px'
    },
    day: {
        color: '#466384',
        marginRight: 'auto'
    },
    light: {
        color: '#466384'
    }
};

const forecastItem = ({day, temperature, nightTemperature, weather}) => {
    return (
        <ListItem style={styles.item}>
            <Typography variant="subtitle2" style={styles.day}>{day}</Typography>
            <Typography variant="subtitle2" style={styles.temperatures}>{temperature}<sup
                style={{fontSize: '0.5em'}}>&deg;C</sup><span style={styles.nightTemperature}>{nightTemperature}<sup
                style={{fontSize: '0.5em'}}>&deg;C</sup></span></Typography>
            <Icon type={weather} timeOfDay="day" wrapperCss={styles.image} imageCss={styles.image}/>
        </ListItem>
    );
};

forecastItem.propTypes = {
    day: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    nightTemperature: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired,
};


export default forecastItem;