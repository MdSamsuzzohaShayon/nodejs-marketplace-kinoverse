
import React, { useState, useEffect } from 'react';
import { Box, Container, FormControl, Button } from '@mui/material';
import { CustomOutlinedInput } from '../../styles/Theme.style';
import Loader from '../elements/Loader';
import { useDispatch, useSelector } from 'react-redux';
import CustomModal from '../elements/CustomModal';
import { openModal, changeText } from '../../redux/slices/modalSlice';
import { BACKEND_URL } from '../../config/keys.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Login = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let _isMounted = true;


    const [currentUser, setCurrentUser] = useState({ password: null, email: null });
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        return () => {
            _isMounted = false;
        }
    }, []);



    const inputChangeHandler = (e) => {
        // console.log(e.target.name);
        // [e.target.name]: e.target.value }
        setCurrentUser({
            ...currentUser,
            [e.target.name]: e.target.value
        });
    }



    const loginUser = async () => {
        try {
            const { email, password } = currentUser;
            setIsLoading(true);
            // return response data 
            const data = {
                email,
                password
            };

            const response = await axios.post(`${BACKEND_URL}/user/login`, data);

            // console.log(response, "Before");
            // if (response.status === 404 || response.status === 406) {
            //     console.log(response.status);
            //     dispatch(changeText({
            //         heading: "Invalid credentials",
            //         body: "There are no user with this email",
            //     }));
            //     dispatch(openModal());
            //     setIsLoading(false);
            //     return;
            // }
            // console.log(_isMounted);
            // console.log(response);

            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                _isMounted = false; // BECAUSE WE ARE NAVIGATING TO ANOTHER PAGE 
                if (_isMounted) {
                    setIsLoading(false);
                }
                navigate('/admin');

            }
            if (_isMounted) {
                setCurrentUser({ password: null, email: null });
            }

        } catch (error) {
            dispatch(changeText({
                heading: "Something went wrong ",
                body: "Please try again with correct password and email",
            }));
            dispatch(openModal());
            setIsLoading(false);
            setCurrentUser({ password: null, email: null });
            console.log(error);
        }
    }




    const loginHandler = (e) => {
        e.preventDefault();
        // console.log("Submit Event - ", e);
        if (currentUser.password && currentUser.email) {
            loginUser();
        } else {
            // show modal 
            dispatch(changeText({
                heading: "Invalid Credentials",
                body: "Please enter password and email both!",
            }));
            dispatch(openModal());
        }
    }


    // const handleModal = (e) => {
    //     dispatch(changeText({
    //         heading: "This is modal heading",
    //         body: "This is modal body",
    //     }));
    //     dispatch(openModal());
    // }

    return <div className='Login'>
        {/* <Button onClick={handleModal}>Open modal</Button> */}
        <CustomModal />
        {isLoading ? <Loader /> : (
            <Box mt={5}>
                <Container maxWidth="xl" >
                    <Box
                        onSubmit={loginHandler}
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <FormControl fullWidth margin="dense">
                            <CustomOutlinedInput
                                fullWidth={true}
                                name="email"
                                type='email'
                                onChange={inputChangeHandler}
                                margin='dense'
                                required
                                color='error'
                                placeholder="Email"
                                inputProps={{
                                    'aria-label': 'email',
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth margin='dense'>
                            <CustomOutlinedInput
                                fullWidth={true}
                                type='password'
                                name="password"
                                onChange={inputChangeHandler}
                                margin='dense'
                                required
                                color='error'
                                placeholder="Password"
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'password',
                                }}
                            />
                        </FormControl>
                        <FormControl margin='dense'>
                            <Button variant="contained" color="error" type='submit'>Login</Button>
                        </FormControl>
                    </Box>
                </Container>
            </Box>
        )}
    </div>;
};

export default Login;


/*
import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../redux/slices/subscriberSlice.js';

const Login = (props) => {
    const dispatch = useDispatch();

    return <div>
        <button onClick={(e) => { dispatch(login({ name: "Updated name", email: "updated email" })) }}>Login</button>
        <button onClick={(e) => { dispatch(logout()) }}>Logout</button>
    </div>;
};

export default Login;
*/

/*

    
    
*/



