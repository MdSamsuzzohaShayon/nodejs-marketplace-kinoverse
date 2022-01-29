import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loader = (props) => {
    return <Box className='Loader' sx={{
        width: "100vw",
        height: "100vh",
        background: "rgba(8, 9, 71, 0.8)",
        position: "absolute",
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    }}>
        <CircularProgress color="error" />
    </Box>;
};

export default Loader;
