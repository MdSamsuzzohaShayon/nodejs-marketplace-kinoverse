import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BACKEND_URL } from '../../config/keys.js';


const initialStateValue = [];

export const getAllUsers = createAsyncThunk('user/getAllUsers', async (users, thunkAPI) => {
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const response = await axios.get(`${BACKEND_URL}/user/all`, config);
        if (response.status === 200) {
            return response.data.allUsers;
        }
        return initialStateValue;
    } catch (error) {
        // console.log(error);
        return initialStateValue;
    }
});








// FETCH USER CREDENTIALS
const userSlice = createSlice({
    name: "user",
    initialState: { allUsers: initialStateValue, userInput: { username: null, email: null } },
    reducers: {
        changeUser: (state, action) => {
            state.userInput = action.payload
            // console.log("Create user state - ", state.value);
            // console.log("Create user action - ", action.payload);
        },
        // CREATE USER 
        createUser: (state, action) => {
            // console.log("Create user state - ", state);
            // console.log("Create user action - ", action);
            state.value = [...state, action.payload]
        },
        // DELETE USER 
        deleteUser: (state, action) => {
            // SEND DELETE REQUEST TO BACKEND 
            state.value = state.filter((item) => item.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.allUsers = action.payload;
        });
    }
});




const { actions, reducer } = userSlice;

export const { createUser, deleteUser, changeUser } = actions;
export default reducer;