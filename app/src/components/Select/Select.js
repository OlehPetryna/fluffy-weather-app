import React from 'react';
import ReactSelect from 'react-select';

const styles = {
    control: (base, style) => {
        return {
            ...base,
            background: '#DFDFDF',
            borderRadius: '5px',
        }
    },
    container: (base, style) => {
        return {
            ...base,
            background: '#DFDFDF',
            borderRadius: '5px',
            maxWidth: '75vw',
            margin: '0 auto 3rem'
        }
    },
    menu: (base, style) => {
        return {
            ...base,
            background: '#DFDFDF',
            maxWidth: '75vw',
            borderBottomRightRadius: '10px',
            borderBottomLeftRadius: '10px',
            margin: '0 auto',
        }
    },
    multiValue: (base, style) => {
        return {
            ...base,
            background: '#466384',
            borderRadius: '10px',
            color: '#FFF',
        }
    },
    multiValueLabel: (base, style) => {
        return {
            ...base,
            padding: '8px 10px 8px 15px',
            paddingLeft: '15px',
            color: '#FFF',
        }
    }
};

const Select = (props) => {
    return (
        <ReactSelect {...props} styles={styles}/>
    )
};

export default Select;