import { createSlice } from '@reduxjs/toolkit';


const initialStateValue = [
    { id: 1, name: 'A', email: "example1@gmail.com", role: "SUPER" },
    { id: 2, name: 'B', email: "example2@gmail.com", role: "SUPER" },
    { id: 3, name: 'C', email: "example3@gmail.com", role: "GENERAL" },
    { id: 4, name: 'D', email: "example4@gmail.com", role: "GENERAL" },
    { id: 5, name: 'E', email: "example5@gmail.com", role: "GUEST" },
];


// FETCH USER CREDENTIALS
const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    reducers: {
        // CREATE USER 
        createUser: (state, action) => {
            console.log("Create user state - ", state);
            console.log("Create user action - ", action);
            state.value = [...state, action.payload]
        },
        // DELETE USER 
        deleteUser: (state, action) => {
            // SEND DELETE REQUEST TO BACKEND 
            state.value = state.filter((item) => item.id !== action.payload);
        }
    }
});




const { actions, reducer } = userSlice;

export const { createUser, deleteUser } = actions;
export default reducer;