import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BACKEND_URL } from '../../config/keys.js';
import { openModal } from './elementsSlice.js'



const initialStateValue = [];

const initialRegisterableUser = {
    name: null,
    email: null,
    password: null,
    password2: null
}
const initialLoginableUser = {
    email: null,
    password: null
}






export const getAllUsers = createAsyncThunk('user/getAllUsers', async (user, thunkAPI) => {
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



/*
export const registerNewUser = createAsyncThunk('user/registerNewUser', async (user, thunkAPI) => {
    try {
        // console.log(user);
        // console.log(thunkAPI);
        const token = localStorage.getItem('token');
        if (token) {
            const config = {
                headers: {
                    'Content-Type': `application/json`,
                    'Authorization': `Bearer ${token}`
                }
            };
            // IF THERE IS TOKEN CREATE STUFF 
            const response = await axios.post(`${BACKEND_URL}/user/register-stuff`, user, config);
            if (response.status === 200) {
                return response.data.allUsers;
            }
        } else {
            // IF THERE IS NOT TOKEN CREATE GENERAL USER 
            const config = {
                headers: {
                    'Content-Type': `application/json`
                }
            };
            const response = await axios.post(`${BACKEND_URL}/user/register-general`, user, config);
            // console.log(store);
            // if (response.status === 200 || response.status === 201) {
            //     store.dispatch(getAllUsers());
            //     store.dispatch(openModal({ heading: "Success", body: "User is been made successfully!" }));
            // } else if (response.status === 208) {
            //     store.dispatch(openModal({ heading: "User already exist!", body: "Use another email address to create new user" }));
            // } else if (response.status === 401) {
            //     localStorage.clear();
            // }
        }

        return initialStateValue;
    } catch (error) {
        localStorage.clear();
        console.log(error);
        return initialStateValue;
    }
});

*/






// FETCH USER CREDENTIALS
const userSlice = createSlice({
    name: "user",
    initialState: {
        allUsers: initialStateValue,
        loginableUser: initialLoginableUser,
        registerableUser: initialRegisterableUser
    },
    reducers: {
        changeRagisterUser: (state, action) => {
            // console.log("Create user state - ", state);
            // console.log("Create user action - ", action.payload);
            state.registerableUser[action.payload.name] = action.payload.value;
        },
        // CREATE USER 
        // registerUser: (state, action) => {
        //     // console.log("Create user state - ", state);
        //     // console.log("Create user action - ", action);
        //     // ACTION PAYLOAD IS A SINGLE VALUE OF USER INPUT 
        // },
        // DELETE USER 
        changeLoginUser: (state, action) => {
            // SEND DELETE REQUEST TO BACKEND 
            state.loginableUser[action.payload.name] = action.payload.value;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            // console.log(action.payload);
            state.allUsers = action.payload;
        });
        // builder.addCase(registerNewUser.fulfilled, (state, action) => {
        //     state.registerableUser = action.payload;
        // });
    }
});




const { actions, reducer } = userSlice;

export const { changeLoginUser, changeRagisterUser } = actions;
export default reducer;