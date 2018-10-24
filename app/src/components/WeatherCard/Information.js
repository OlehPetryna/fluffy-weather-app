import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const rootStyles = {
    firstLine: {
        letterSpacing: '5px',
        fontSize: '1.1em'
    },
    secondLine: {
        fontWeight: 'bold',
        letterSpacing: '1px',
        marginBottom: '20px'
    },
    dark: {
        color: '#FFF'
    },
    light: {
        color: '#466384'
    }
};

const icon = (props) => {
    const {classes, day, month, date, city} = props;
    return (
        <div style={rootStyles[props.skin]}>
            <Typography style={rootStyles[props.skin]} classes={{root: classes.firstLine}} align="center"
                        variant="overline">
                {`${day} ${month} ${date}`}
            </Typography>
            <Typography style={rootStyles[props.skin]} classes={{root: classes.secondLine}} align="center"
                        variant="button">
                {city}
            </Typography>
        </div>
    );
};

icon.propTypes = {
    city: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    skin: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    day: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired,
};


export default withStyles(rootStyles)(icon);