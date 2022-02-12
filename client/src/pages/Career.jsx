import React, { useState } from 'react';
import { Box, Typography, Container, Button, FormControl, Checkbox, FormControlLabel } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import useStyles from '../styles/Career.style.js';
import { useSelector, useDispatch } from 'react-redux';
import { CustomOutlinedInput, CustomFileInput } from '../styles/Theme.style.js';
import Spotlight from '../components/pages-common/Spotlight.jsx';
import CustomModal from '../components/elements/CustomModal';
import { openModal } from '../redux/slices/elementsSlice.js'
import axios from 'axios';
import { BACKEND_URL } from '../config/keys.js';




const Career = (props) => {
    const dispatch = useDispatch();
    const learnEarn = useSelector((state) => state.static.learnEarn);
    const classes = useStyles();



    const formData = new FormData();
    formData.append('screen', false);
    formData.append('animation', false);


    const fileUploadHandler = (e) => {
        const singleFile = e.target.files[0];
        // console.log(singleFile.size, 1000 * 100 * 2);
        if (singleFile.size > 1000 * 100 * 2) {
            // ERROR 
            // PLEASE UPLOAD FILE WITH LESS THAN 2 MB SIZE 

            dispatch(openModal({ heading: "File size it too large", body: "please upload a file with size of less than 2px" }));

        } else if (singleFile.type !== "application/pdf") {
            // ERROR 
            // ONLY PDF FILE ARE ALLOWED TO UPLOAD

            dispatch(openModal({ heading: "Invalid file type", body: "Only PDF file are allowed to upload." }));
        } else {
            // console.log("Upload success");
            formData.append('resume', singleFile);
        }
    }


    const inputChangeHandler = (e) => {
        // console.log(e.target.checked);
        // formData.append([e.target.name], e.target.value);
        formData.set([e.target.name], e.target.value);

    }

    const inputCheckboxHandler = (e) => {
        formData.set([e.target.name], e.target.checked);
    }

    const handleCheckboxInput = (e) => {
        console.log(e.target.name);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.get('name') === null || formData.get('name') === '') {
            // INVALID NAME 

            dispatch(openModal({ heading: "Name empty", body: "You must enter a name!" }));
        } else if (formData.get('email') === null || formData.get('email') === '') {
            // INVALID EMAIL 

            dispatch(openModal({ heading: "Email empty", body: "You must enter an email address!" }));
        } else if (formData.get('resume') === null || formData.get('resume') === '') {
            // UPLOAD RESUME 

            dispatch(openModal({ heading: "Upload resume", body: "You must upload youe resume!" }));
        } else if (formData.get('animation') === 'false' && formData.get('screen') === 'false') {
            // CHECK AT LEAST ONE 

            dispatch(openModal({ heading: "Animation & Screen", body: "Either any one of them should be selected." }));
        } else {
            const config = {
                method: 'POST',
                url: `${BACKEND_URL}/subscriber/add-to-waitlist`,
                data: formData
            };

            axios(config)
                .then(function (response) {
                    // console.log(response.status);
                    if (response.status === 406) {

                        dispatch(openModal({ heading: "Missed something", body: "Reload and fill all the field" }));
                    } else if (response.status === 200 || response.status === 201) {

                        dispatch(openModal({ heading: "Thank You!", body: "Successfully attached to waitlist!" }));
                    } else if (response.status = 208) {

                        dispatch(openModal({ heading: "Already waitlisted!", body: "Use another email " }));
                    }
                    for (let [key, val] of formData.entries()) {
                        // console.log(key, val);
                        formData.delete(key);
                    }
                    e.target.reset();
                })
                .catch(function (error) {
                    console.log(error);
                });


        }
    }


    return (<Box>
        <Container maxWidth="xl" >
            <Typography variant='h1' my={5} sx={{ fontSize: { xs: 30, md: 75 } }} >Kinoverse Careers</Typography>
        </Container>
        <Box className={classes.wrap_body} >
            {/* DO SOME STYLE FOR BOX AFTER  */}
            <Spotlight img_src={learnEarn.img_src} title={learnEarn.title} desc={learnEarn.desc} />


            <Box className={classes.apply_here} component='form' onSubmit={handleSubmit}>
                <Container maxWidth="xl">
                    <Typography variant='h2' mb={5} pt={5}>Apply Here</Typography>
                    <Typography variant='h6'>Signup below to join the waitlist</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
                        <CustomOutlinedInput
                            sx={{ marginRight: { xs: 0, md: 1 } }}
                            fullWidth
                            type='text'
                            name='name'
                            onChange={inputChangeHandler}
                            required
                            color='error'
                            placeholder='Name'
                        />
                        <CustomOutlinedInput
                            sx={{ marginLeft: { xs: 0, md: 1 }, mt: { xs: 2, md: 0 } }}
                            fullWidth
                            type='email'
                            name='email'
                            required
                            color='error'
                            onChange={inputChangeHandler}
                            placeholder='Email'
                        />
                    </Box>
                    <Typography variant='h4' mt={5}>Upload Resume</Typography>
                    <CustomFileInput
                        type="file"
                        onChange={fileUploadHandler}
                    />
                    <Typography variant='h4' mt={5}>I'm interested in</Typography>
                    <FormControl fullWidth={true} margin='dense' sx={{ flexDirection: { xs: 'column', md: "row" } }}>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox onChange={inputCheckboxHandler} name="screen" color="error" />}
                            label="Screenwriting"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Checkbox onChange={inputCheckboxHandler} name="animation" color="error" />}
                            label="3D animation"
                            labelPlacement="end"
                        />
                    </FormControl>

                    <FormControl margin='dense' justify="center" align="center" fullWidth={true} >
                        <Box textAlign='center' my={5}>
                            <Button variant="contained" color="error" type='submit' endIcon={<ArrowForward />} sx={{ textTransform: 'capitalize' }} > Apply </Button>
                        </Box>
                    </FormControl>
                </Container>
            </Box>
        </Box>

        <CustomModal />
    </Box>);
};

export default Career;
