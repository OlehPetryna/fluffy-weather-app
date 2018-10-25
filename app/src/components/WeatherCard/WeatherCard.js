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
    constructor(props) {
        super(props);
        this.frontFaceRef = React.createRef();
        this.backFaceRef = React.createRef();
        this.parentRef = React.createRef();
        this.state = {
            showingFront: true,
        };
    }

    onFlipTriggered = () => {
        this.setState((prevState, prevProps) => {
            return {showingFront: !prevState.showingFront}
        }, this.resize);
    };

    shownFaceRef = () => this.state.showingFront ? this.frontFaceRef : this.backFaceRef;

    resize = () => {
        this.parentRef.current.style.width = this.shownFaceRef().current.clientWidth + 'px';
        this.parentRef.current.style.height = this.shownFaceRef().current.clientHeight + 'px';
    };

    componentDidMount() {
        this.resize();
    }

    componentDidUpdate() {
        this.resize();
    }

    render() {
        return (
            <div style={wrapperStyles}>
                <div ref={this.parentRef}
                     style={{...containerStyles, transform: this.state.showingFront ? null : 'rotateY(180deg)'}}>
                    <FrontPart {...this.props} innerRef={this.frontFaceRef} onCornerClick={this.onFlipTriggered}/>
                    <BackPart {...this.props}  innerRef={this.backFaceRef} onCornerClick={this.onFlipTriggered}/>
                </div>
            </div>
        )
    }
}


WeatherCard.propTypes = {
    classes: PropTypes.object.isRequired,
    forecast: PropTypes.array.isRequired,
    timeOfDay: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
};


export default WeatherCard;