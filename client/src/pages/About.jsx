import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Spotlight from '../components/pages-common/Spotlight';
import useStyles from '../styles/Career.style.js';
import { useSelector } from 'react-redux';


const About = (props) => {
    const classes = useStyles();
    const staticPage = useSelector((state) => state.static);


    return (<Box>
        <Container maxWidth="xl" >
            <Typography variant='h1' my={5} sx={{ fontSize: { xs: 30, md: 75 } }} >About Us</Typography>
        </Container>
        <Box className={classes.wrap_body} >
            {/* DO SOME STYLE FOR BOX AFTER  */}
            <Spotlight img_src={staticPage.digitalized.img_src} title={staticPage.digitalized.title} desc={staticPage.digitalized.desc} img_right={false} extraComponent={null} />
            <Spotlight img_src={staticPage.kvApp.img_src} title={staticPage.kvApp.title} desc={staticPage.kvApp.desc} img_right={true} extraComponent={null} />
            <Spotlight img_src={staticPage.kvFlow.img_src} title={staticPage.kvFlow.title} desc={staticPage.kvFlow.desc} img_right={false} extraComponent={null} />
            {/* <Spotlight img_src={staticPage.clapperboard.img_src} title={staticPage.clapperboard.title} desc={staticPage.clapperboard.desc} img_right={true} extraComponent={<Button>Learn More</Button>} /> */}
        </Box>
    </Box>);
};

export default About;
