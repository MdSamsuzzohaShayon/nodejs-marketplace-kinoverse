import { configureStore } from '@reduxjs/toolkit';
import subscriberReducer from './slices/subscriberSlice.js';
import themeReducer from './slices/themeSlice.js';
import userReducer from './slices/userSlice';

const store = configureStore({
    reducer: {
        subscriber: subscriberReducer,
        theme: themeReducer,
        user: userReducer,
    }
});

console.log("Initial state: ", store.getState());


export default store;