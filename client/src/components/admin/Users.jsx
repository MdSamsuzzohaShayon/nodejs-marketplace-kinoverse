import React, { useState } from 'react';
import { Box, ListItemButton, ListItemText, Divider, Container, Typography, FormControl, Button, TextField, MenuItem } from '@mui/material';
import { CustomOutlinedInput } from '../../styles/Theme.style.js';
import { DeleteForever, ArrowForward } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import useStyles from '../../styles/Admin.style.js';
import Loader from '../elements/Loader';
import { useDispatch } from 'react-redux';
import { changeText } from '../../redux/slices/modalSlice.js';
import { getAllUsers } from '../../redux/slices/userSlice.js'
import CustomModal from '../elements/CustomModal';
import axios from 'axios';
import { BACKEND_URL } from '../../config/keys.js';



const Users = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        phone: null
    });
    const [isLoading, setIsLoading] = useState(false);

    const [userRole, setUserRole] = useState("GENERAL");

    const token = localStorage.getItem('token');

    const inputChangeHandler = (e) => {
        setUserInfo(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const inputRoleHandler = (e) => {
        setUserRole(e.target.value);
    }


    const deleteUserHanler = async (e, userId) => {
        setIsLoading(true);
        // console.log(userId);
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            };

            const deletedUser = await axios.delete(`${BACKEND_URL}/user/delete/${userId}`, config);
            if (deletedUser.status === 200) {
                dispatch(getAllUsers());
                dispatch(changeText({ heading: "Delete", body: "User is been deleted successfully" }));
            } else if (deletedUser.status === 405) {
                dispatch(changeText({ heading: "Can not delete", body: "You do not have the previllage to delete" }));
            }
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);

    }


    // CREATE NEW USER 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (userInfo.name === '' || userInfo.email === '' || userInfo.password === '' || userInfo.password2 === '') {
            // console.log("Working - ", userInfo);
            // ERROR 
            let errors = 'Errors: ';
            if (userInfo.name === '') errors += " User name can not be empty, ";
            if (userInfo.email === '') errors += " User email can not be empty, ";
            if (userInfo.passowrd === '') errors += " User passowrd can not be empty, ";
            if (userInfo.passowrd2 === '') errors += " Confirm passowrd can not be empty, ";
            dispatch(changeText({ heading: "invalid user", body: errors }));
        } else if (userInfo.password.length < 6) {
            dispatch(changeText({ heading: "Invalid password", body: "Password must be more 6 or more than 6 charecter long" }));
        } else if (userInfo.password !== userInfo.password2) {
            dispatch(changeText({ heading: "password did not match", body: "Make sure you use same password in both field" }));
        } else {
            // SUCCESS 
            let submitableUser = userInfo;
            submitableUser.role = userRole;

            // "Salah1234"    "Salah1234"
            try {
                const config = {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    // data: JSON.stringify(submitableUser)
                };

                const response = await axios.post(`${BACKEND_URL}/user/register`, submitableUser, config);

                if (response.status === 200 || response.status === 201) {
                    dispatch(getAllUsers());
                    dispatch(changeText({ heading: "Success", body: "User is been made successfully!" }));
                } else if (response.status === 208) {
                    dispatch(changeText({ heading: "User already exist!", body: "Use another email address to create new user" }));
                } else if (response.status === 401) {
                    localStorage.clear();
                }
                e.target.reset();
            } catch (error) {
                // console.log(error.response.status);
                if (error.response.status === 401) {
                    localStorage.clear();
                    // navigate('/login');
                }
            }
        }
        setIsLoading(false);
    }
    // console.log(classes);
    const userList = useSelector(state => state.user.allUsers);
    return <Box className={classes.admin_page_userlist}>
        {isLoading ? <Loader /> : (<React.Fragment>
            {userList.length > 0 && userList.map((user, i) => (<React.Fragment key={i} >
                <ListItemButton className={classes.admin_page_userlistitem} >
                    <ListItemText primary={`${user.name} (${user.role})`} />
                    {props.currentUser.role === 'SUPER' && (user.role !== 'SUPER' && <DeleteForever onClick={e => deleteUserHanler(e, user.id)} />)}
                </ListItemButton>
                <Divider />
            </React.Fragment>))}
            <br />
            {props.currentUser.role === 'SUPER' && (
                <Box component='form' sx={{ backgroundColor: '#24242a' }} onSubmit={handleSubmit}>
                    <Container maxWidth="xl">
                        <Typography variant='h2' mb={5} pt={5} color='error' >Create new user</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
                            <CustomOutlinedInput sx={{ marginRight: { xs: 0, md: 1 }, mt: 2 }} fullWidth type='text' name='name' onChange={inputChangeHandler} required color='error' placeholder='Name' />
                            <CustomOutlinedInput sx={{ marginLeft: { xs: 0, md: 1 }, mt: 2 }} fullWidth type='email' name='email' required color='error' onChange={inputChangeHandler} placeholder='email' />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
                            <CustomOutlinedInput sx={{ marginRight: { xs: 0, md: 1 }, mt: 2 }} fullWidth type='password' name='password' onChange={inputChangeHandler} required color='error' placeholder='Password' />
                            <CustomOutlinedInput sx={{ marginLeft: { xs: 0, md: 1 }, mt: 2 }} fullWidth type='password' name='password2' onChange={inputChangeHandler} required color='error' placeholder='Confirm Password' />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
                            <TextField select sx={{ marginRight: { xs: 0, md: 1 }, mt: 2, border: "solid 2px rgba(110, 110, 122, 0.5)", height: "48px", color: "white", overflow: "hidden" }} fullWidth onChange={inputRoleHandler} value={userRole} >
                                <MenuItem value="GENERAL">General</MenuItem>
                                <MenuItem value="STUFF">Stuff</MenuItem>
                            </TextField>
                            <CustomOutlinedInput sx={{ marginLeft: { xs: 0, md: 1 }, mt: 2 }} fullWidth type='number' name='phone' onChange={inputChangeHandler} color='error' placeholder='Phone Number' />
                        </Box>
                        <FormControl margin='dense' justify="center" align="center" fullWidth={true} >
                            <Box textAlign='center' my={5}>
                                <Button variant="contained" color="error" type='submit' endIcon={<ArrowForward />} sx={{ textTransform: 'capitalize' }} > Add </Button>
                            </Box>
                        </FormControl>
                    </Container>
                </Box>
            )}
            <CustomModal />
        </React.Fragment>)}
    </Box>;
};

export default Users;
