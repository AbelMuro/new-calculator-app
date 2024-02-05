import React from 'react';
import Store from './Store';
import { Provider } from 'react-redux';
import Header from './Components/Header';
import ScreenResult from './Components/ScreenResult';
import './styles.css';

function App(){
    return(
        <Provider store={Store}>
            <main className='container'>
                <Header/>
                <ScreenResult/>
            </main>
        </Provider>

    )
}

export default App;