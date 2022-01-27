import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { name: "initial name", email: 'initial email' };
export const subscriberSlice = createSlice({
    name: "subscriber",
    initialState: { value: initialStateValue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialStateValue;
        },
    }
});


export const { login, logout } = subscriberSlice.actions;


export default subscriberSlice.reducer;

