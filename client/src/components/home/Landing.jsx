import React, { useState } from 'react';
import { BACKEND_URL } from '../../config/keys.js';
import useStyles from '../../styles/Home.style.js';
import { Grid, Container, Typography, FormControl, Box, Button } from '@mui/material';
import { CustomOutlinedInput } from '../../styles/Theme.style.js';
import { ArrowForward } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import CustomModal from '../elements/CustomModal';
import { changeText } from '../../redux/slices/modalSlice.js';
import axios from 'axios';


const Landing = () => {
    const classes = useStyles();
    const resizeScreen = useSelector((state) => state.theme.resizeScreen);
    const dispatch = useDispatch();
    const [currentSubscriber, setCurrentSubscriber] = useState('');


    async function addSubScriber() {
        try {
            // console.log("Email value");
            if (currentSubscriber === null || currentSubscriber === "") {
                // Error - Invalid Email

                dispatch(changeText({ heading: "Invalid email!", body: "Please use a valid email address!" }))
            } else {
                const response = await axios.post(`${BACKEND_URL}/subscriber/add-subscriber`, { email: currentSubscriber });
                // console.log(response);
                // console.log(modalHeader);

                if (response.status === 200) {
                    // 'Thank you!';

                    dispatch(changeText({ heading: "Thank You!", body: "You have subscribed successfully!" }))
                } else if (response.status === 208) {
                    // Error - You Already Subscribed! 

                    dispatch(changeText({ heading: "You have already subscribed!", body: "Use another email address to subscribe." }))
                } else if (response.status === 406) {
                    // Error - Invalid Email

                    dispatch(changeText({ heading: "Invalid email!", body: "Please use a valid email address!" }))
                }
            }
            setCurrentSubscriber('');
        } catch (error) {
            console.error(error);
        }
    }



    const inputChangeHandler = (e) => {
        setCurrentSubscriber(e.target.value);
    }





    return <Container maxWidth="xl"  >
        {/* item container direction="row" */}
        {/* direction="column-reverse" */}
        <Grid container spacing={2} columns={{ xs: 4, md: 12 }} sx={{ flexDirection: (resizeScreen ? "column-reverse" : 'row'), }} className={classes.grid_br} pb={5}  >

            <Grid item xs={6} md={8} sx={{ textAlign: { xs: 'center', md: 'left' } }} >

                <Typography variant='h1' my={5}>Digitalized film industry - software for filmmaking</Typography>
                <Typography variant='h2' mb={5} >Filmmaker and content creator marketplace</Typography>
                <Typography variant="h4" mb={5}>In need of filmmaker or video creator? <br />
                    Are you film maker or video content creator?</Typography>

                <Typography variant="h6">Signup to get notified of our launch</Typography>

                <FormControl fullWidth margin='dense'>
                    {/* sx={{ m: 1, width: '25ch' }} */}
                    <CustomOutlinedInput
                        fullWidth={true}
                        type='email'
                        name="email"
                        onChange={inputChangeHandler}
                        value={currentSubscriber}
                        margin='dense'
                        required
                        color='error'
                        placeholder="Email"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'email',
                        }}
                    />
                </FormControl>
                <FormControl margin='dense' justify="center" align="center" fullWidth={true} >
                    <Box textAlign='center' my={3}>
                        <Button
                            variant="contained" color="error" type='submit' endIcon={<ArrowForward />} sx={{ textTransform: 'capitalize' }}
                            onClick={addSubScriber}
                        >
                            Notify Me
                        </Button>
                    </Box>
                    {/* <Button variant="contained" color="error" type='submit' endIcon={<ArrowForward />}> Notify Me  </Button> */}
                </FormControl>

                <Typography variant="h6" my={3}>
                    Signing up pre-launch will give you a $10 credit applied towards service fees. Limited one code per person. * Promo code will be emailed *
                </Typography>
            </Grid>
            <Grid item xs={6} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                <img src="./img/mobile.png" className={classes.image_fluid} alt="" />
                {/* <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
          /> */}
            </Grid>
        </Grid>
        <CustomModal />
    </Container >;
};

export default Landing;
