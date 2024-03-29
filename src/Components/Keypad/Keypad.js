import React from 'react';
import Digit from './Key';
import Operator from './Key';
import Delete from './Delete';
import Reset from './Reset';
import styles from './styles.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { EVALUATE_EXPRESSION } from 'Actions';

function Keypad() {
    const dispatch = useDispatch();
    const {theme} = useSelector(state => state.theme);


    const handleCalculate = () => {
        dispatch(EVALUATE_EXPRESSION());
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
        <section className={setTheme(styles.keypad)}>
            <Digit value={7} />
            <Digit value={8}/>
            <Digit value={9}/>
            <Delete/>
            <Digit value={4}/>
            <Digit value={5} />
            <Digit value={6} />
            <Operator value={'+'}/>
            <Digit value={1}/>
            <Digit value={2}/>
            <Digit value={3}/>
            <Operator value={'-'}/>
            <Digit value={'.'}/>
            <Digit value={0}/>
            <Operator value={'/'} />
            <Operator value={'x'} />
            <Reset/>
            <button type='button' className={setTheme(styles.submit)} onClick={handleCalculate}>
                =    
            </button>
        </section>
    )
}

export default Keypad;