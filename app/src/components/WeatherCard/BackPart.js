import Card from '@material-ui/core/Card'
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Temperature from './Temperature';
import Icon from './Icon';
import Corner from './Corner';
import Information from './Information';

const styles = {
    card: {
        height: '375px',
        color: '#fff',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: '270px',
        backfaceVisibility: 'hidden',
        position: 'absolute',
        transform: 'rotateY(180deg)'
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

const backPart = ({classes, onCornerClick, timeOfDay, weather, city, day, month, date}) => {
    const skin = getSkin(timeOfDay);
    return (
        <Card style={styles[skin]} classes={{
            root: classes.card
        }}>
            <Corner onClick={onCornerClick} direction="left"/>
            <Temperature skin={skin} value="10"/>
            <Icon type={weather} timeOfDay={timeOfDay}/>
            <Information city={city} skin={skin} month={month} date={date} day={day}/>
        </Card>
    )
};

backPart.propTypes = {
    classes: PropTypes.object.isRequired,
    timeOfDay: PropTypes.string.isRequired,
    onCornerClick: PropTypes.func.isRequired,
    weather: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
};


export default withStyles(styles)(backPart);