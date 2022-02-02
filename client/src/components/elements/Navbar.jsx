import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import { Link } from "react-router-dom";

const pages = [{ name: 'home', link: "/home" }, { name: 'about', link: "/about" }, { name: 'career', link: "/career" }, { name: 'login', link: "/login" }];
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
                        <img src="./img/logo.png" width="100%" alt="" />
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>);
};

export default Navbar;


