import React from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { UPDATE_OPERAND_ONE, UPDATE_OPERAND_TWO } from 'Actions';

function ScreenResult() {
    const dispatch = useDispatch();
    const {theme} = useSelector(state => state.theme);
    const {operandOne, operandTwo} = useSelector(state => state.calculate);


    const handleNumber = (e) => {
        let operand = e.target.value;
        operand = operand.replaceAll(',', '');              //remove all commas first
        if(operand.match(/\D/) !== null) return;            //check if string ONLY contains digits
        let operandWithCommas = Number(operand).toLocaleString('en', {useGrouping: true}) + '';   //then add the commas
        dispatch(UPDATE_OPERAND_ONE(operandWithCommas))
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
            <input type='text' value={operandOne} onChange={handleNumber} className={setTheme(styles.screen)} >

            </input>
        )
}

export default ScreenResult;