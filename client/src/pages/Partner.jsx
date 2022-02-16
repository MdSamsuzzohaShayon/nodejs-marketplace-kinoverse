import React, { useState } from 'react';
import { Box, Container, Typography, TextareaAutosize, FormControl, Button } from '@mui/material';
import { CustomOutlinedInput } from '../styles/Theme.style';
import { ArrowForward } from '@mui/icons-material';
import useStyles from '../styles/Static.style.js';
import { useDispatch } from 'react-redux';
import CustomModal from '../components/elements/CustomModal';
import { openModal } from '../redux/slices/elementsSlice';
import axios from 'axios';
import { BACKEND_URL } from '../config/keys';


const Partner = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [partnerCompany, setPartnerCompany] = useState();

    const inputChangeHandler = (e) => {
        // console.log(e.target.checked);
        setPartnerCompany(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!partnerCompany.firstName && !partnerCompany.businessEmail) {
            // INVALID NAME 

            dispatch(openModal({ heading: "Empty fields!", body: "Name and email can't be empty" }));
        } else {

            try {
                const response = await axios.post(`${BACKEND_URL}/subscriber/add-partner`, partnerCompany);
                if (response.status === 406) {
                    dispatch(openModal({ heading: "Missed something", body: "Reload and fill all the field" }));
                } else if (response.status === 200 || response.status === 201) {

                    dispatch(openModal({ heading: "Thank You!", body: "You are added as partner!" }));
                } else if (response.status = 208) {

                    dispatch(openModal({ heading: "Already partner!", body: "Use another email " }));
                }
                e.target.reset();
            } catch (error) {
                console.log(error);
            }
        }
    }


    return (
        <Box className="Partner" sx={{ minHeight: "100vh" }} >
            <Container maxWidth="xl" >
                <Typography variant='h2' mb={3} pt={5} >Parter with Kinoverse</Typography>
                <Typography variant='h4' pb={5} >We are currently partnering with like minded businesses and films… if this is you, apply below</Typography>

                <Box component='form' onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', alignItems: 'space-between', mt: 2, flexDirection: { xs: 'column', md: 'row' } }}>
                        {/* first name, last name, business email, business website, description (text box) */}
                        <CustomOutlinedInput sx={{ marginRight: { xs: 0, md: 1 } }} fullWidth type='text' name='firstName' onChange={inputChangeHandler} required color='error' placeholder='First Name' />
                        <CustomOutlinedInput sx={{ marginLeft: { xs: 0, md: 1 }, mt: { xs: 2, md: 0 } }} fullWidth type='text' name='lastName' required color='error' onChange={inputChangeHandler} placeholder='Last Name' />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'space-between', mt: 2, flexDirection: { xs: 'column', md: 'row' } }}>
                        <CustomOutlinedInput sx={{ marginRight: { xs: 0, md: 1 } }} fullWidth type='email' name='businessEmail' onChange={inputChangeHandler} required color='error' placeholder='Business Email' />
                        <CustomOutlinedInput sx={{ marginLeft: { xs: 0, md: 1 }, mt: { xs: 2, md: 0 } }} fullWidth type='text' name='businessWebsite' required color='error' onChange={inputChangeHandler} placeholder='Bueiness Website' />
                    </Box>

                    <TextareaAutosize className={classes.partner_textarea} pt={2} onChange={inputChangeHandler} aria-label="empty textarea" name="description" placeholder="Description" />



                    <FormControl margin='dense' justify="center" align="center" fullWidth={true} >
                        <Box textAlign='center' my={5}>
                            <Button variant="contained" color="error" type='submit' endIcon={<ArrowForward />} sx={{ textTransform: 'capitalize' }} > Submit </Button>
                        </Box>
                    </FormControl>
                </Box>
            </Container>
            <CustomModal />
        </Box>
    )
}

export default Partner;