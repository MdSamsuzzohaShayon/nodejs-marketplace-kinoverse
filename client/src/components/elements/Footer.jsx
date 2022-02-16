import React, { useState } from 'react';
import useStyles from '../../styles/Elements.style.js';
import { Box, Container, Grid, Typography, List, ListItem } from '@mui/material';
import LinkMUI from '@mui/material/Link';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Footer = (props) => {
    const classes = useStyles();
    const font = "Averta, Avenir, Helvetica Neue, Calibri, Helvetica, Roboto, sans-serif";

    const navItems = useSelector(state => state.static.footerNavItems);
    const shareIcons = useSelector(state => state.static.footerShareIcon);





    return <Box className={classes.footer_wrapper}>
        <Container maxWidth='xl'>
            <Grid container >
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontFamily: font }}  >About Kinoverse</Typography>
                    <Box>
                        <List>{navItems.map((ni, i) => (<ListItem key={i}  > <Link to={ni.to} className={classes.footer_link} > {ni.text}</Link> </ListItem>))}</List>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant='h4' sx={{ fontFamily: font }} >Ready to signup?</Typography>
                        <Typography my={3} sx={{ fontSize: '0.8em', fontFamily: font, fontWeight: 200 }}>
                            Use the signup form to start your account and be nitified out launch. Please provide a valid email address to receive a $10 credit coupon towards your first jobs fee's on the marketplace.
                        </Typography>
                    </Box>
                    <Box>

                        {shareIcons.map((icon, i) => (
                            <LinkMUI key={i} target="_blank" href={icon.url} >
                                {icon.component}
                            </LinkMUI>
                        ))}
                        {/* <a target="_blank" href="mailto:info@kinoverse.net" rel="noopener noreferrer" aria-label="Visit Rover on Instagram" data-track-event="" data-event-type="click" data-event="social-outbound-click" data-event-merge="{ &quot;socialNetwork&quot;: &quot;instagram&quot; }">
                            <i className="fas fa-envelope" aria-hidden="true"></i>
                        </a> */}
                    </Box>


                </Grid>
            </Grid>
            <Typography py={2} sx={{ color: "#62686e", fontFamily: font, fontSize: "0.8em" }}>© 2021-2022 Kinoverse Corp. All rights reserved.</Typography>

        </Container>
    </Box>;
};

export default Footer;
