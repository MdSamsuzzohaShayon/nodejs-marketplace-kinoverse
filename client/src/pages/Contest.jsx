import { Box, Typography, Container, Button } from '@mui/material';
import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';

function Contest() {
    const [goToLogin, setGoToLogin] = useState(false);
    const token = localStorage.getItem('token');

    const screenplayHandler = (e) => {
        // console.log(e);
        if (!token) {
            setGoToLogin(true);
        }
    }


    return (<Box>
        {goToLogin && (
            <Navigate to='/login' replace={true} />
        )}
        <Container maxWidth='xl'>
            <Typography variant='h2'>Explaning the contest</Typography>
            <Typography variant='h5'>images to example</Typography>
            {token ? <Typography >Has token</Typography> : (
                <Button onClick={screenplayHandler} variant="contained" color="error" sx={{ textTransform: 'capitalize' }}>
                    Login to upload screenplay
                </Button>
            )}

        </Container>
    </Box>)
}

export default Contest;
