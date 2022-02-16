import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material';
import { Link } from "react-router-dom";

const Navbar = (Props) => {
    const [bottomScrolled, setBottomScrolled] = useState(false);
    // let bottomScrolled = false;

    window.addEventListener('scroll', (e) => {
        // console.log("Event - ", e);
        // console.log("Scroll Y ", window.scrollY);
        // console.log("window.innerHeight ", window.innerHeight);
        // console.log("document.body.offsetHeight ", document.body.offsetHeight);
        // console.log("window.innerHeight + window.scrollY ", window.innerHeight + window.scrollY);
        // console.log("==========================================================");

        if ((window.innerHeight + window.scrollY) + 100 >= document.body.offsetHeight) {
            // you're at the bottom of the page
            // console.log("bottom");
            setBottomScrolled(true);
        } else {
            setBottomScrolled(false);

        }
    });
    // useEffect(() => {
    // }, [bottomScrolled]);


    return (<Box sx={{ flexGrow: 1 }} >
        <AppBar
            position={bottomScrolled ? "fixed" : "static"}
            sx={{
                backgroundColor: (bottomScrolled ? "#24242a" : 'transparent'),
                boxShadow: (bottomScrolled ? "" : 'none')
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        py={1}
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, width: { xs: '10rem', md: "18rem" } }}
                    >
                        <Link to='/' >
                            <img src="./img/logo.png" width="100%" alt="" />
                        </Link>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>);
};

export default Navbar;


