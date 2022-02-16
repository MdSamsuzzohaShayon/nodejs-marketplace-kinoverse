import { Box, Typography, Container, Button, FormControl } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import { CustomFileInput } from '../styles/Theme.style.js';
import { fileUploadHandler } from '../utils/helper.js';
import { useDispatch } from 'react-redux';
import CustomModal from '../components/elements/CustomModal';

function Contest() {
    const dispatch = useDispatch();
    const [goToLogin, setGoToLogin] = useState(false);
    const token = localStorage.getItem('token');

    const screenplayHandler = (e) => {
        // console.log(e);
        if (!token) {
            setGoToLogin(true);
        }
    }


    const formData = new FormData();
    const maxFileSize = 1000 * 100 * 5; // 5 mb


    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (<Box>
        {goToLogin && (
            <Navigate to='/login' replace={true} />
        )}
        <Container maxWidth='xl'>
            <Typography variant='h2'>Explaning the contest</Typography>
            <Typography variant='h5'>images to example</Typography>
            {/* LOGGED IN USER HAS THE ACCESS - THEY CAN UPLOAD SCREENPLAY  */}
            {token ? (<Box component='form' onSubmit={handleSubmit}>
                <Container maxWidth="xl">
                    <Typography variant='h2' mb={5} pt={5} >Upload your screenplay</Typography>
                    <CustomFileInput
                        type="file"
                        onChange={e => fileUploadHandler(e, maxFileSize, ['pdf', 'fdx', 'txt'], dispatch, formData)}
                    />
                    <FormControl margin='dense' justify="center" align="center" fullWidth={true} >
                        <Box textAlign='center' my={5}>
                            <Button variant="contained" color="error" type='submit' endIcon={<ArrowForward />} sx={{ textTransform: 'capitalize' }} > Submit </Button>
                        </Box>
                    </FormControl>
                </Container>
            </Box>) : (
                <Button onClick={screenplayHandler} variant="contained" color="error" sx={{ textTransform: 'capitalize' }}>
                    Login to upload screenplay
                </Button>
            )}

        </Container>
        <CustomModal />
    </Box>)
}

export default Contest;
