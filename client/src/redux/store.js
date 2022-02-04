import { configureStore } from '@reduxjs/toolkit';
import subscriberReducer from './slices/subscriberSlice.js';
import themeReducer from './slices/themeSlice.js';
import userReducer from './slices/userSlice.js';
import modalReducer from './slices/modalSlice.js';
import staticReducer from './slices/staticSlice.js';

const store = configureStore({
    reducer: {
        subscriber: subscriberReducer,
        theme: themeReducer,
        user: userReducer,
        modal: modalReducer,
        static: staticReducer
    }
});

console.log("Initial state: ", store.getState());


export default store;