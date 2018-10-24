import React from 'react';
import PropTypes from 'prop-types';

const cornerStyles = {
    generic: {
        position: 'absolute',
        top: '0',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: '22px',
        width: '28px',
        cursor: 'pointer',
        paddingBottom: '3px',
        transition: 'all 0.15s ease-in',
        color: '#466384',
        background: 'rgba(255,255,255,0.35)',
        fontSize: '22px',
        transform: null,
    },
    hover: {
        background: 'rgba(255,255,255,1)',
        transform: 'scale(1.1)',
        color: '#fff',
    },
    left: {
        textAlign: 'left',
        left: '0',
        paddingLeft: '3px',
        borderBottomRightRadius: '50px'
    },
    right: {
        textAlign: 'right',
        paddingRight: '3px',
        right: '0',
        borderBottomLeftRadius: '50px'
    }
};

class Corner extends React.Component {
    state = {
        background: 'rgba(255,255,255,0.35)',
        transform: null,
    };

    onMouseEnter = () => {
        this.setState({
            background: cornerStyles.hover.background,
            transform: cornerStyles.hover.transform,
        })
    };
    onMouseLeave = () => {
        this.setState({
            background: cornerStyles.generic.background,
            transform: cornerStyles.generic.transform,
        })
    };

    render() {
        const styles = {...cornerStyles.generic, ...cornerStyles[this.props.direction], ...this.state};
        return this.props.direction === 'left' ? (
            <span onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={styles}>&larr;</span>
        ) : (
            <span onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={styles}>&rarr;</span>
        );
    }
}

Corner.propTypes = {
    direction: PropTypes.string.isRequired,
};


export default Corner;