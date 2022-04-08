import React, { useState } from 'react';

// MATERIAL UI
import {
  Box,
  ListItemButton,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';
import CustomModal from '../elements/CustomModal';
import { DeleteForever } from '@mui/icons-material';
import useStyles from '../../styles/Admin.style.js';

// REDUX
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/slices/elementsSlice.js';
import { getAllUsers } from '../../redux/slices/userSlice.js';

// ELEMENTS
import Register from '../login/Register.jsx';
import Loader from '../elements/Loader';

// REQUEST, CONFIG
import axios from 'axios';
import { BACKEND_URL } from '../../config/keys.js';

const Users = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem('token');

  const deleteUserHanler = async (e, userId) => {
    setIsLoading(true);
    // console.log(userId);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const deletedUser = await axios.delete(
        `${BACKEND_URL}/user/delete/${userId}`,
        config
      );
      if (deletedUser.status === 200) {
        dispatch(getAllUsers());
        dispatch(
          openModal({
            heading: 'Delete',
            body: 'User is been deleted successfully',
          })
        );
      } else if (deletedUser.status === 405) {
        dispatch(
          openModal({
            heading: 'Can not delete',
            body: 'You do not have the previllage to delete',
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  // console.log(classes);
  const userList = useSelector((state) => state.user.allUsers);
  return (
    <Box className={classes.admin_page_userlist}>
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          {userList.length > 0 &&
            userList.map((user, i) => (
              <React.Fragment key={i}>
                <ListItemButton className={classes.admin_page_userlistitem}>
                  <ListItemText primary={`${user.name} (${user.role})`} />
                  {props.currentUser.role === 'SUPER' &&
                    user.role !== 'SUPER' && (
                      <DeleteForever
                        onClick={(e) => deleteUserHanler(e, user.id)}
                      />
                    )}
                </ListItemButton>
                <Divider />
              </React.Fragment>
            ))}
          <br />
          {props.currentUser.role === 'SUPER' && (
            // <Box component='form' sx={{ backgroundColor: '#24242a' }} onSubmit={handleSubmit}>
            //     <Container maxWidth="xl">
            //         <Typography variant='h2' mb={5} pt={5} color='error' >Create new user</Typography>
            //         <Box sx={{ display: 'flex', alignItems: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
            //             <CustomOutlinedInput sx={{ marginRight: { xs: 0, md: 1 }, mt: 2 }} fullWidth type='text' name='name' onChange={inputChangeHandler} required color='error' placeholder='Name' />
            //             <CustomOutlinedInput sx={{ marginLeft: { xs: 0, md: 1 }, mt: 2 }} fullWidth type='email' name='email' required color='error' onChange={inputChangeHandler} placeholder='email' />
            //         </Box>
            //         <Box sx={{ display: 'flex', alignItems: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
            //             <CustomOutlinedInput sx={{ marginRight: { xs: 0, md: 1 }, mt: 2 }} fullWidth type='password' name='password' onChange={inputChangeHandler} required color='error' placeholder='Password' />
            //             <CustomOutlinedInput sx={{ marginLeft: { xs: 0, md: 1 }, mt: 2 }} fullWidth type='password' name='password2' onChange={inputChangeHandler} required color='error' placeholder='Confirm Password' />
            //         </Box>
            //         <Box sx={{ display: 'flex', alignItems: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
            //             <TextField select sx={{ marginRight: { xs: 0, md: 1 }, mt: 2, border: "solid 2px rgba(110, 110, 122, 0.5)", height: "48px", color: "white", overflow: "hidden" }} fullWidth onChange={inputRoleHandler} value={userRole} >
            //                 <MenuItem value="GENERAL">General</MenuItem>
            //                 <MenuItem value="STUFF">Stuff</MenuItem>
            //             </TextField>
            //             <CustomOutlinedInput sx={{ marginLeft: { xs: 0, md: 1 }, mt: 2 }} fullWidth type='number' name='phone' onChange={inputChangeHandler} color='error' placeholder='Phone Number' />
            //         </Box>
            //         <FormControl margin='dense' justify="center" align="center" fullWidth={true} >
            //             <Box textAlign='center' my={5}>
            //                 <Button variant="contained" color="error" type='submit' endIcon={<ArrowForward />} sx={{ textTransform: 'capitalize' }} > Add </Button>
            //             </Box>
            //         </FormControl>
            //     </Container>
            // </Box>

            /**
             * @pending
             * We need to setup stripe to register a new stuff and this task is pending for now since it's giving some kind of error
             */
            <Box>
              <Typography variant="h2" color="error">
                Register new user will use stripe payment(Under development)
              </Typography>
              <Typography variant="h4">
                /src/components/admin/Users.jsx
              </Typography>
            </Box>
            // <Register title="Create a new stuff" />
          )}
          <CustomModal />
        </React.Fragment>
      )}
    </Box>
  );
};

export default Users;
