import React, {useRef, useEffect} from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { RESET_EXPRESSION } from 'Actions';

function Screen() {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const {theme} = useSelector(state => state.theme);
    const {expression} = useSelector(state => state.expression);

    const format = (expression) => {
        let arr = expression.split('');
        let hasOperators = false;

        for(let i = 0; i < arr.length; i++){
            if(i === 0) continue;

            if(!arr[i].match(/\d/) && arr[i] !== '.'){
                arr.splice(i, 1, ` ${arr[i]} `);
                hasOperators = true;
            }
                
        }
        return arr.join('');

    }

    const setTheme = (initialStyles) => {
        if(theme === 1)
            return [initialStyles, styles.ThemeOne].join(' ');
        else if(theme === 2)
            return [initialStyles, styles.ThemeTwo].join(' ');
        else
            return [initialStyles, styles.ThemeThree].join(' ');
    }


    useEffect(() => {
        let width = inputRef.current.scrollWidth;
        inputRef.current.scrollLeft = width;
    }, [expression])

    useEffect(() => {
        if(expression === 'Infinity' || expression === '-Infinity'){
            dispatch(RESET_EXPRESSION());
            alert('Cannot divide by zero')
        }
            
    },[expression])

    return(
            <input 
                type='text' 
                value={expression.length === 0 ? '0' : format(expression)} 
                onChange={() => {}} 
                className={setTheme(styles.screen)} 
                readOnly 
                ref={inputRef}/>
        )
}

export default Screen;