import React from 'react';
import PropTypes from 'prop-types';
import FrontPart from './FrontPart';
import BackPart from './BackPart';


const wrapperStyles = {
    background: 'transparent',
    perspective: '1000px'
};

const containerStyles = {
    position: 'relative',
    transition: 'transform 0.31s ease-in-out',
    transformStyle: 'preserve-3d',
};

class WeatherCard extends React.Component {
    state = {
        showingFront: true,
    };

    onFlipTriggered = () => {
        this.setState((prevState, prevProps) => {return {showingFront: !prevState.showingFront}});
    };

    render() {
        return (
            <div style={wrapperStyles}>
                <div style={{...containerStyles, transform: this.state.showingFront ? null : 'rotateY(180deg)'}}>
                    <FrontPart {...this.props} onCornerClick={this.onFlipTriggered} />
                    <BackPart {...this.props} onCornerClick={this.onFlipTriggered} />
                </div>
            </div>
        )
    }
}


WeatherCard.propTypes = {
    classes: PropTypes.object.isRequired,
    timeOfDay: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
};


export default WeatherCard;