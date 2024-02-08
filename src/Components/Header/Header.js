import React, {useCallback} from 'react';
import ThemeSwitch from './ThemeSwitch';
import styles from './styles.module.css'
import {useSelector} from 'react-redux';

function Header() {
    const {theme} = useSelector(state => state.theme);

    const setTheme = useCallback((initialStyles) => {
        if(theme === 1)
            return [styles.ThemeOne, initialStyles].join(' ');
        else if(theme === 2)
            return [styles.ThemeTwo, initialStyles].join(' ');
        else   
            return [styles.ThemeThree, initialStyles].join(' ');
    }, [theme])


    return(
        <header className={styles.header}>
            <h1 className={setTheme(styles.header_logo)}>
                calc
            </h1>
            <ThemeSwitch theme={theme}/>
        </header>
    )
}

export default Header;