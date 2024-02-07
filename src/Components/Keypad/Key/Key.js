import React from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { ADD_DIGIT, ADD_OPERATOR, ADD_DECIMAL_POINT } from 'Actions';
 
function Key({value}) {
    const dispatch = useDispatch();
    const {theme} = useSelector(state => state.theme);

    const handleKey = () => {
        if(typeof(value) === 'number')
            dispatch(ADD_DIGIT(value));
        else if(value === '.')
            dispatch(ADD_DECIMAL_POINT())
        else
            dispatch(ADD_OPERATOR(value));
    }

    const setTheme = (initialStyles) => {
        if(theme === 1)
            return [initialStyles, styles.ThemeOne].join(' ');
        else if(theme === 2)
            return [initialStyles, styles.ThemeTwo].join(' ');
        else   
            return [initialStyles, styles.ThemeThree].join(' ');
    }

    return(
        <button 
            type='button' 
            className={setTheme(styles.key)} 
            onClick={handleKey} 
            data-id={value}>
                {value}
        </button>
    )
}

export default Key;