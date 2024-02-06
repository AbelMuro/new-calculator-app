import React from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch} from 'react-redux';

function Screen() {
    const dispatch = useDispatch();
    const {theme} = useSelector(state => state.theme);
    const {expression} = useSelector(state => state.expression);


    const setTheme = (initialStyles) => {
        if(theme === 1)
            return [initialStyles, styles.ThemeOne].join(' ');
        else if(theme === 2)
            return [initialStyles, styles.ThemeTwo].join(' ');
        else
            return [initialStyles, styles.ThemeThree].join(' ');
    }

    return(
            <input 
                type='text' 
                value={expression.length === 0 ? '0' : expression} 
                onChange={() => {}} 
                className={setTheme(styles.screen)} 
                readOnly>

            </input>
        )
}

export default Screen;