import React from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { RESET_EXPRESSION } from 'Actions';

function Reset(){
    const dispatch = useDispatch();
    const {theme} = useSelector(state => state.theme);

    const handleReset = () => {
        dispatch(RESET_EXPRESSION());
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
        <button className={setTheme(styles.reset)} onClick={handleReset}>
            reset
        </button>
    )
}

export default Reset;