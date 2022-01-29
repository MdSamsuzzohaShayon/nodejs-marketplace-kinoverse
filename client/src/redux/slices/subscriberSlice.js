import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BACKEND_URL } from '../../config/keys';
// import { useNavigate } from 'react-router-dom';

const initialSubscribersList = [{}];


// axios.interceptors.response.use(response => {
//     return response;
// }, error => {
//     if (error.response.status === 401) {
//         //place your reentry code
//         console.log(error.response.status);
//     }
//     return error;
// });

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
        console.log(response);
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

export const subscriberSlice = createSlice({
    name: "subscriber",
    initialState: { subscriberList: initialSubscribersList, waitlist: [{}] },
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
            // console.log(action.payload);
            const filterSubscriber = [], filterWaitlist = [];
            action.payload.filter(sub => {
                if (sub.waitlist === false) {
                    filterSubscriber.push(sub)
                    return sub;
                } else {
                    filterWaitlist.push(sub);
                    return sub;
                }
            });
            state.subscriberList = filterSubscriber;
            state.waitlist = filterWaitlist;

        })
    }
});


export const { login, logout } = subscriberSlice.actions;


export default subscriberSlice.reducer;

