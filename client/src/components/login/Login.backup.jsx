// REACT AND REACT ROUTER
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// REDUX 
import { changeText } from '../../redux/slices/modalSlice';
import { useDispatch } from 'react-redux';

// MATERIAL UI 
import { Box, Container, FormControl, Button, Typography } from '@mui/material';
import { CustomOutlinedInput } from '../../styles/Theme.style';
import useStyles from '../../styles/Admin.style.js';

// CUSTOM COMPONENT 
import Loader from '../elements/Loader';
import CustomModal from '../elements/CustomModal';

// API 
import { BACKEND_URL } from '../../config/keys.js';
import axios from 'axios';







const Login = (props) => {
    const classes = useStyles();
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
            //     
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

        }
    }


    return <Box className={classes.login_page}>
        <CustomModal />
        {isLoading ? <Loader /> : (
            <Box mt={5}>
                <Container maxWidth="xl" >
                    <Box
                        onSubmit={loginHandler}
                        component="form"
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

                    <Box my={5}>
                        <Typography variant='h6' component='a'>Don't you have account ? create one.</Typography>
                    </Box>
                </Container>
            </Box>
        )}
    </Box>;
};

export default Login;


