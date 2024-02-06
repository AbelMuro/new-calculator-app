import React from 'react';
import styles from './styles.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {DELETE} from 'Actions';

function Delete() {
    const dispatch = useDispatch();
    const {theme} = useSelector(state => state.theme)

    const handleDelete = () => {
        dispatch(DELETE());
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
        <button type={'button'} className={setTheme(styles.delete)} onClick={handleDelete}>
            del
        </button>
    )
}

export default Delete;