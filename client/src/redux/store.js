import { configureStore } from '@reduxjs/toolkit';
import subscriberReducer from './slices/subscriberSlice.js';
import themeReducer from './slices/themeSlice.js';
import userReducer from './slices/userSlice.js';
import elementsReducer from './slices/elementsSlice.js';
import staticReducer from './slices/staticSlice.js';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        subscriber: subscriberReducer,
        user: userReducer,
        elements: elementsReducer,
        static: staticReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false, }),
});

console.log("Initial state: ", store.getState());


export default store;