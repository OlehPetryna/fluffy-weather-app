import React from 'react';
import PropTypes from 'prop-types';


class Corner extends React.Component {
    cornerStyles = {
        generic: {
            position: 'absolute',
            top: '0',
            display: 'flex',
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
            justifyContent: 'flex-start',
            textAlign: 'left',
            left: '0',
            paddingLeft: '3px',
            borderBottomRightRadius: '50px'
        },
        right: {
            textAlign: 'right',
            paddingRight: '3px',
            justifyContent: 'flex-end',
            right: '0',
            borderBottomLeftRadius: '50px'
        }
    };
    constructor(props) {
        super(props);
        // Don't call this.setState() here!

        this.cornerStyles.generic = {...this.cornerStyles.generic, ...(props.cornerStyles || {})};
        this.cornerStyles.hover = {...this.cornerStyles.hover, ...(props.cornerHoverStyles || {})};

        this.state = {
            background: this.cornerStyles.generic.background,
            transform: null,
        };
    }

    onMouseEnter = (e) => {
        this.setState({
            background: this.cornerStyles.hover.background,
            transform: this.cornerStyles.hover.transform,
        })
    };
    onMouseLeave = () => {
        this.setState({
            background: this.cornerStyles.generic.background,
            transform: this.cornerStyles.generic.transform,
        })
    };

    render() {
        const styles = {...this.cornerStyles.generic, ...this.cornerStyles[this.props.direction], ...this.state};
        return this.props.direction === 'left' ? (
            <span onClick={(e) => this.props.onClick(e)} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={styles}>&larr;</span>
        ) : (
            <span onClick={(e) => this.props.onClick(e)} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={styles}>&rarr;</span>
        );
    }
}

Corner.propTypes = {
    direction: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};


export default Corner;