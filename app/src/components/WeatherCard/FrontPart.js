import Card from '@material-ui/core/Card'
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import RootRef from '@material-ui/core/RootRef';
import Temperature from './Temperature';
import Icon from './Icon';
import Corner from './Corner';
import Information from './Information';

const styles = {
    card: {
        height: '475px',
        color: '#fff',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 5,
        minWidth: '270px',
        backfaceVisibility: 'hidden',
        position: 'absolute'
    },
    light: {
        background: 'linear-gradient(to bottom, rgba(164,225,243,1) 0%, rgba(251,249,227,1) 100%)'
    },
    dark: {
        background: 'linear-gradient(to bottom, rgba(84,59,142,1) 0%, rgba(252,155,126,1) 100%)'
    }
};

const getSkin = (timeOfDay) => {
    return timeOfDay === 'day' ? 'light' : 'dark';
};

const frontPart = React.forwardRef(({temperature, classes, onCornerClick, timeOfDay, weather, city, day, month, date}, ref) => {
    const skin = getSkin(timeOfDay);
    return (
        <RootRef rootRef={ref}>
            <Card style={styles[skin]} classes={{
                root: classes.card
            }}>
                <Corner onClick={onCornerClick} direction="right"/>
                <Temperature skin={skin} value={temperature}/>
                <Icon type={weather} timeOfDay={timeOfDay}/>
                <Information city={city} skin={skin} month={month} date={date} day={day}/>
            </Card>
        </RootRef>
    )
});

frontPart.propTypes = {
    classes: PropTypes.object.isRequired,
    onCornerClick: PropTypes.func.isRequired,
    timeOfDay: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
};


export default withStyles(styles)(frontPart);