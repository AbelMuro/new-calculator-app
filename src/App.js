import React from 'react';
import Store from './Store';
import { Provider } from 'react-redux';
import Header from './Components/Header';
import Screen from './Components/Screen';
import Keypad from './Components/Keypad';
import './styles.css';

function App(){
    return(
        <Provider store={Store}>
            <main className='container'>
                <Header/>
                <Screen/>
                <Keypad/>
            </main>
        </Provider>

    )
}

export default App;