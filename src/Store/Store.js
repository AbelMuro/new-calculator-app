import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './Slices';
import {                
    persistStore,                                                                   
    persistReducer,                                                                
    FLUSH,                                                                          
    REHYDRATE,                                                                  
    PAUSE,                                                                        
    PERSIST,                                                                        
    PURGE,                                                                         
    REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const persistedReducer = persistReducer({key: 'calculator state', storage}, rootReducer);

const Store = configureStore({
    reducer : persistedReducer,
    middleware : getDefaultMiddleware => getDefaultMiddleware({serializableCheck: {ignoredActions: [PERSIST, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}})
})

const persistedStore = persistStore(Store);
export {persistedStore};
export default Store;