import React, { useState } from 'react';
import useStyles from '../../styles/Elements.style.js';
import { Box, Container, Grid, Typography, List, ListItem } from '@mui/material';
import { Facebook, Drafts, Twitter, LinkedIn } from "@mui/icons-material";
import LinkMUI from '@mui/material/Link';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    const classes = useStyles();
    const font = "Averta, Avenir, Helvetica Neue, Calibri, Helvetica, Roboto, sans-serif";

    const initialShareIcon = [
        {
            url: "https://www.facebook.com/kinoverseteam",
            component: <Facebook color='error' sx={{ fontSize: { xs: 30, md: 50 }, marginRight: { xs: 2, md: 3 } }}  ></Facebook>
        },
        {
            url: "https://twitter.com/kinoverseteam",
            component: <Twitter color='error' sx={{ fontSize: { xs: 30, md: 50 }, marginRight: { xs: 2, md: 3 } }}  ></Twitter>
        },
        {
            url: "mailto:info@kinoverse.net",
            component: <Drafts color='error' sx={{ fontSize: { xs: 30, md: 50 }, marginRight: { xs: 2, md: 3 } }}  ></Drafts>
        },
        {
            url: "https://www.linkedin.com/company/kinoverse",
            component: <LinkedIn color='error' sx={{ fontSize: { xs: 30, md: 50 }, marginRight: { xs: 2, md: 3 } }}  ></LinkedIn>
        }
    ]
    const [shareIcons, setShareIcons] = useState(initialShareIcon);


    return <Box className={classes.footer_wrapper}>
        <Container maxWidth='xl'>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontFamily: font }}  >About Kinoverse</Typography>
                    <Box>
                        <List>
                            <ListItem >
                                <Link to={'/'} className={classes.footer_link} >Home</Link>
                            </ListItem>
                            <ListItem >
                                <Link to={'/about'} className={classes.footer_link} >About</Link>
                            </ListItem>
                            <ListItem >
                                <Link to={'/career'} className={classes.footer_link} >Career</Link>
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant='h4' sx={{ fontFamily: font }} >Ready to signup?</Typography>
                        <Typography my={3} sx={{ fontSize: '0.8em', fontFamily: font, fontWeight: 200 }}>
                            You can use the signup form above to signup for the pre-launch.
                            Please provide a valid email address to receive a $10 credit coupon code for FREE.
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
