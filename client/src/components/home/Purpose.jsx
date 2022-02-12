import React, { useState } from 'react';
import useStyles from '../../styles/Home.style.js';
import { Box, Container, Grid, Typography } from "@mui/material";
import { useSelector } from 'react-redux';


const Purpose = () => {
    const clientItem = useSelector(state => state.static.clientItem);
    const classes = useStyles();


    return <Box className={classes.purpose} >
        <Container maxWidth="xl" >
            <Grid container >
                {clientItem.length > 0 && clientItem.map((client, i) => (<Grid item sx={{ pt: 6 }} key={i} xs={12} lg={4} md={6} textAlign='center'>
                    <Box >
                        <Box className={classes.image_border} >
                            <img src={client.imgSrc} className={classes.icon_img} alt={client.title} />
                        </Box>
                    </Box>
                    <Typography align='center' mt={5} variant='h2'>{client.title}</Typography>
                    <Typography align='center' mt={5} variant='h6'>{client.parageaph} </Typography>
                </Grid>))}
            </Grid>
        </Container>
    </Box >;
};

export default Purpose;
