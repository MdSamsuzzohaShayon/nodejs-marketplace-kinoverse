// REACT AND REACT ROUTER
import React, { useState } from 'react';

// REDUX 
import { useDispatch } from 'react-redux';

// MATERIAL UI 
import { Box, Container, Typography } from '@mui/material';
import useStyles from '../../styles/Admin.style.js';

// CUSTOM COMPONENT 
import Loader from '../elements/Loader';
import CustomModal from '../elements/CustomModal';
import Register from './Register';
import LoginElement from './LoginElement';



const Login = (props) => {
    const classes = useStyles();


    const [registedComponent, setRegisterComponent] = useState(false);


    //  TOGGLE LOGIN AND REGISTER COMPONENT  
    /*
    return <Box className={classes.login_page}>
        <Box mt={5}>
            <Container maxWidth="xl" >
                {registedComponent ? (<React.Fragment >
                    <Register title="Sign Up" />
                    <Box my={5}>
                        <Typography variant='h6' component='a'>Already registered ? </Typography>
                        <Typography variant="a" onClick={e => setRegisterComponent(prevState => !prevState)} component="a" >login.</Typography>
                    </Box>
                </React.Fragment>) : (<React.Fragment>
                    <LoginElement title="Login" />
                    <Box my={5}>
                        <Typography variant='h6' component='a'>Don't you have account ? </Typography>
                        <Typography variant="a" onClick={e => setRegisterComponent(prevState => !prevState)} component="a" >create one.</Typography>
                    </Box>
                </React.Fragment>)}

            </Container>
        </Box>
    </Box>;
    */


    return <Box className={classes.login_page}>
        <Box mt={5}>
            <Container maxWidth="xl" >
                <React.Fragment>
                    <LoginElement title="Login" />
                </React.Fragment>

            </Container>
        </Box>
    </Box>;
};

export default Login;


