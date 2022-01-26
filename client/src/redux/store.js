import { configureStore } from '@reduxjs/toolkit';
import subscriberReducer from './reducer/subscriber.js';
import themeReducer from './reducer/theme.js';

const store = configureStore({
    reducer: {
        subscriber: subscriberReducer,
        theme: themeReducer
    }
});


export default store;