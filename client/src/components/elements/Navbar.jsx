import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import { Link } from "react-router-dom";

const pages = [{ name: 'home', link: "/home" }, { name: 'about', link: "/about" }, { name: 'career', link: "/career" }, { name: 'login', link: "/login" }];
const Navbar = (Props) => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        // setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (<AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                    LOGO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >

                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page, i) => {
                            if (page.name === "login") {
                                const userToken = localStorage.getItem('token');
                                if (userToken === null) {
                                    return <MenuItem key={i} onClick={handleCloseNavMenu}>
                                        <Link to={page.link}><Typography textAlign="center">{page.name}</Typography></Link>
                                    </MenuItem>;
                                } else {
                                    return;
                                }
                            } else {
                                // console.log(page.name);
                                return <MenuItem key={i} onClick={handleCloseNavMenu}>
                                    <Link to={page.link}><Typography textAlign="center">{page.name}</Typography></Link>
                                </MenuItem>;
                            }
                        })}
                    </Menu>
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                    LOGO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page, i) => {

                        if (page.name === "login") {
                            const userToken = localStorage.getItem('token');
                            if (userToken === null) {
                                return <Button
                                    key={i}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Link to={page.link}>{page.name}</Link>
                                </Button>
                            } else {
                                return;
                            }
                        } else {
                            // console.log(page.name);
                            return <Button
                                key={i}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link to={page.link}>{page.name}</Link>
                            </Button>
                        }
                    })}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>);
};

export default Navbar;


