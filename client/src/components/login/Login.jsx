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


// STRIPE 
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_51E42CcE15Lqo4v04SXBupK0Tla4hZXv40un0snL872GBUnrE9p3ar34DPxV1htHN716UFCKrPeBvY5WKoYAqztpY00nmq991Sl"); // Make sure to call `loadStripe` outside of a component’s render to avoid recreating the `Stripe` object on every render.




const Login = (props) => {
    const classes = useStyles();


    const [registedComponent, setRegisterComponent] = useState(false);


    //  TOGGLE LOGIN AND REGISTER COMPONENT  
    return <Box className={classes.login_page}>
        <Box mt={5}>
            <Container maxWidth="xl" >
                {registedComponent ? (<React.Fragment >
                    <Elements stripe={stripePromise} >
                        <Register title="Sign Up" />
                    </Elements>
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

};

export default Login;


