import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BACKEND_URL } from '../../config/keys';
// import { useNavigate } from 'react-router-dom';

const initialSubscribersList = [{}], initialWaitlist = [{}];




export const getAllSubscribers = createAsyncThunk('subscriber/getAllSubscriber', async (subscribers, thunkAPI) => {
    // const navigate = useNavigate();
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const response = await axios.get(`${BACKEND_URL}/subscriber/all`, config);
        // console.log(response);
        if (response.status === 200) {
            return response.data.subscriberList;
        }
        return initialSubscribersList;
    } catch (error) {
        // console.log(error.response.status);
        if (error.response.status === 401) {
            localStorage.clear();
            // navigate('/login');
        }
        return initialSubscribersList;
    }
});



export const getAllWaitlist = createAsyncThunk('subscriber/getAllWaitlist', async (waitlists, thunkAPI) => {
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const response = await axios.get(`${BACKEND_URL}/subscriber/all-waitlist`, config);
        // console.log(response);
        if (response.status === 200) {
            return response.data.waitlist;
        }
        return initialWaitlist;
    } catch (error) {
        // console.log(error.response.status);
        if (error.response.status === 401) {
            localStorage.clear();
            // navigate('/login');
        }
        return initialWaitlist;
    }
});

export const subscriberSlice = createSlice({
    name: "subscriber",
    initialState: { subscriberList: initialSubscribersList, waitlist: initialWaitlist },
    reducers: {
        login: (state, action) => {
            // state.value = action.payload;
        },
        logout: (state) => {
            // state.value = initialStateValue;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllSubscribers.fulfilled, (state, action) => {
            state.subscriberList = action.payload;
            // console.log("First build");
        });

        builder.addCase(getAllWaitlist.fulfilled, (state, action) => {
            state.waitlist = action.payload;
            // console.log(action.payload);
        });
    }
});


export const { login, logout } = subscriberSlice.actions;


export default subscriberSlice.reducer;

