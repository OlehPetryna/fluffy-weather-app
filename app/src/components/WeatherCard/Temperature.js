import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import {withStyles} from '@material-ui/core/styles';

const light = {
    color: '#FFF',
};

const dark = {
    color: '#009CDF',
};

const skin = {
    dark: {
        color: '#FFF',
    },
    light: {
        color: '#009CDF',
    }
};

const genericStyles = {
    root: {
        fontSize: '82px',
        fontWeight: '100'
    },
    body1: {
        fontWeight: '100',
        marginBottom: '-25px'
    }
};

const celciusStyles = {
    fontSize: '42px',
};

const temperature = (props) => {
    return (
        <Typography classes={{root: props.classes.root, body1: props.classes.body1}} align="center"
                    style={skin[props.skin]} variant="body1">{props.value}<sup
            style={celciusStyles}>&deg;C</sup></Typography>
    );
};

temperature.propTypes = {
    skin: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
};


export default withStyles(genericStyles)(temperature);