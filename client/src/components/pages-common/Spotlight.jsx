import React, { useState } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import useStyles from '../../styles/Career.style.js';
import { useSelector } from 'react-redux';

const Spotlight = (props) => {
    const classes = useStyles();
    const resizeScreen = useSelector((state) => state.theme.resizeScreen);


    // console.log(resizeScreen);

    return (<Box py={5}>
        <Container maxWidth="xl" >
            <Grid container sx={{
                border: '1px solid rgba(0, 0, 0, 0.062)',
                overflow: "hidden",
                borderRadius: 5,
                background: '#1f1f24',
                flexDirection: (props.img_right ? (resizeScreen ? 'row-reverse' : 'row-reverse') : 'row')
            }}>
                <Grid item xs={12} md={4}  >
                    <Box className={classes.box_image_cover} >
                        <img className={classes.career_image} src={props.img_src} alt='Career image' />
                    </Box>
                </Grid>
                <Grid item xs={12} md={8} className={classes.content}>
                    <Box className={classes.learn_earn_text} >
                        <Typography variant='h1' my={4}>{props.title}</Typography>
                        <Typography variant='h6' sx={{ fontSize: "1.5rem" }}>{props.desc}</Typography>
                        {props.extraComponent}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>);
};

export default Spotlight;
