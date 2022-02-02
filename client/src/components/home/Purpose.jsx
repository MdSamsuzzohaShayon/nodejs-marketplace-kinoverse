import React, { useState } from 'react';
import useStyles from '../../styles/Home.style.js';
import { Box, Container, Grid, Typography } from "@mui/material";

const Purpose = () => {
    const initialCientItem = [
        {
            imgSrc: "./icons/computer.svg",
            title: "For Clients",
            parageaph: "Hire a professional filmmaker and video creator of any kind for your business, or film projects with ease. pay hourly or by the project upon completion or by milestone. post your job and sort through lists of qualified candidates to find the right filmmaker."
        },
        {
            imgSrc: "./icons/camera.svg",
            title: "For Filmmakers",
            parageaph: "Work on your schedule and post your talents for the world to see. Create your profile and get hired doing what you love to do. Apply to new jobs posted or wait to get invited to apply."
        },
        {
            imgSrc: "./icons/business.svg",
            title: "For Business",
            parageaph: "Are you a business looking to manage your creative process? We have you covered as well. KV flow allows you to simplify the filmmaking and content creation process from start to finish."
        }
    ];
    const [clientItem, setClientItem] = useState(initialCientItem);
    const classes = useStyles();


    return <Box className={classes.purpose} >
        <Container maxWidth="xl" >
            <Grid container spacing={2} >
                {clientItem.length > 0 && clientItem.map((client, i) => (<Grid item key={i} xs={12} lg={4} md={6} textAlign='center'>
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
