import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';
import {useDispatch} from 'react-redux';
import {UPDATE_THEME} from 'Actions';

function ThemeSwitch({theme}) {
    const dispatch = useDispatch();
    const handleRef = useRef();

    const handleTheme = () => {
        dispatch(UPDATE_THEME());
    }

    const setTheme = (initialStyles) => {
        if(theme === 1)
            return [styles.ThemeOne, initialStyles].join(' ');
        else if(theme === 2)
            return [styles.ThemeTwo, initialStyles].join(' ');
        else   
            return [styles.ThemeThree, initialStyles].join(' ');
    }

    useEffect(() => {
        let body = document.querySelector('body');

        if(theme === 1){
            body.style.backgroundColor = '#3A4663';
            handleRef.current.style.left = '0px';
        }
        else if(theme === 2){
            body.style.backgroundColor = '#E6E6E6';
            handleRef.current.style.left = '21px';
        }
        else{
            body.style.backgroundColor = '#17062A';
            handleRef.current.style.left = '45px';
        }    
    },[theme])

    return(
        <section className={styles.theme}>
            <p className={setTheme(styles.theme_title)}>
                theme
            </p>
            <div className={styles.theme_content}>
                <ul className={setTheme(styles.theme_numbers)}>
                    <li>
                        1
                    </li>
                    <li>
                        2
                    </li>
                    <li>
                        3
                    </li>
                </ul>
                <div className={setTheme(styles.theme_switch)} onClick={handleTheme}>
                    <div className={setTheme(styles.switch_handle)} ref={handleRef}></div>
                </div>
            </div>
        </section>
    )
}

export default ThemeSwitch;