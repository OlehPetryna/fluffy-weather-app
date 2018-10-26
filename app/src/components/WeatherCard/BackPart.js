import Card from '@material-ui/core/Card'
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import RootRef from '@material-ui/core/RootRef';
import Divider from '@material-ui/core/Divider';
import Temperature from './Temperature';
import Icon from './Icon';
import Corner from './Corner';
import ForecastItem from './ForecastItem';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        height: '475px',
        overflow: 'auto',
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
    heading: {
        letterSpacing: '2px',
        color: '#466384',
        paddingTop: '20px'
    },
    corner: {
        color: '#FFF',
        background: 'rgba(70,99,132, 0.35)'
    },
    cornerHover: {
        background: 'rgba(70,99,132, 1)'
    },
    list: {
        width: '100%',
        // marginTop: '70px',
    },
    dark: {
        background: 'linear-gradient(to bottom, rgba(84,59,142,1) 0%, rgba(252,155,126,1) 100%)'
    }
};

const getSkin = (timeOfDay) => {
    return timeOfDay === 'day' ? 'light' : 'dark';
};

const backPart = React.forwardRef(({classes, onCornerClick, timeOfDay, forecast, city}, ref) => {
    const skin = getSkin(timeOfDay);
    return (
        <RootRef rootRef={ref}>
            <Card classes={{
                root: classes.card
            }}>
                <Corner onClick={onCornerClick} direction="left" cornerStyles={styles.corner} cornerHoverStyles={styles.cornerHover}/>
                <Typography style={styles.heading} variant="h4">{city}</Typography>
                <List style={styles.list}>
                    {
                        forecast.map(
                            (v, i) => (
                                <React.Fragment key={i}>
                                    <Divider/>
                                    <ForecastItem day={v.day} temperature={v.temperature} nightTemperature={v.nightTemperature} weather={v.weather}/>
                                </React.Fragment>
                            )
                        )
                    }
                </List>
            </Card>
        </RootRef>

    )
});

backPart.propTypes = {
    classes: PropTypes.object.isRequired,
    timeOfDay: PropTypes.string.isRequired,
    onCornerClick: PropTypes.func.isRequired,
    weather: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    forecast: PropTypes.array.isRequired,
    date: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
};


export default withStyles(styles)(backPart);