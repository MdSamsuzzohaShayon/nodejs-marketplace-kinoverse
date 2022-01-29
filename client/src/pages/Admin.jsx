import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, CssBaseline, Toolbar, List, Divider, ListItemText, ListItem, ListItemButton, IconButton, ListItemIcon, Collapse, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { Person, ChevronRight, ChevronLeft, Menu, People, HourglassBottom } from "@mui/icons-material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CustomToolbar } from '../styles/Theme.style.js';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../redux/slices/userSlice.js';
import { getAllSubscribers } from '../redux/slices/subscriberSlice';


// MATERIAL UI STYLING START 
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

// MATERIAL UI STYLING ENDS 











function Admin() {
    const dispatch = useDispatch();
    const USERS = "Users", SUB = "Subscribers", WAITLIST = "Waitlist";
    const userList = useSelector(state => state.user.allUsers);
    const subscriberList = useSelector(state => state.subscriber.subscriberList);
    const waitlist = useSelector(state => state.subscriber.waitlist);



    const theme = useTheme();
    const mounted = true;



    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    useState(() => {
        // GRAB ALL SUBSCRIBERS AND USERS 
        // getAllUsers();
        dispatch(getAllUsers());
        dispatch(getAllSubscribers());

    }, []);




    const initialMenuItemList = [{ id: 1, title: USERS, icon: <Person /> }, { id: 2, title: SUB, icon: <People /> }, { id: 3, title: WAITLIST, icon: <HourglassBottom /> }];
    const [menuItemList, setMenuItemList] = useState(initialMenuItemList);
    const [selectedItem, setSelectedItem] = useState(USERS);

    const contentElement = () => {
        // console.log(userList);
        switch (selectedItem) {
            case USERS:
                return <Box>
                    {userList.length > 0 && userList.map((user, i) => (<ListItemButton key={i} component="a" href="#simple-list">
                        <ListItemText primary={user.name} />
                    </ListItemButton>))}
                </Box>
            case SUB:
                return <Box >
                    <Typography variant='h3'>Subscriber</Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell align="left">Serial</TableCell>
                                    <TableCell align="left">ID</TableCell>
                                    <TableCell align="left">Email&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {subscriberList && subscriberList.length > 0 && subscriberList.map((subscriber, i) => (<TableRow key={i} sx={{ '& > *': { borderBottom: 'unset' } }}>
                                    <TableCell>
                                        <IconButton
                                            aria-label="expand row"
                                            size="small"
                                            onClick={() => setOpen(!open)}
                                        >
                                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align="left">{i + 1}</TableCell>
                                    <TableCell align="left">{subscriber.id}</TableCell>
                                    <TableCell align="left">{subscriber.email}</TableCell>
                                </TableRow>))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>;
            case WAITLIST:
                return <Box>
                    <Typography variant='h3'>Waitlist</Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell align="left">Serial</TableCell>
                                    <TableCell align="left">ID</TableCell>
                                    <TableCell align="left">Name&nbsp;</TableCell>
                                    <TableCell align="left">Email&nbsp;</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {waitlist && waitlist.length > 0 && waitlist.map((wait, i) => (<TableRow key={i} sx={{ '& > *': { borderBottom: 'unset' } }}>
                                    <TableCell>
                                        <IconButton
                                            aria-label="expand row"
                                            size="small"
                                            onClick={() => setOpen(!open)}
                                        >
                                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align="left">{i + 1}</TableCell>
                                    <TableCell align="left">{wait.id}</TableCell>
                                    <TableCell align="left">{wait.name}</TableCell>
                                    <TableCell align="left">{wait.email}</TableCell>
                                </TableRow>))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
        }
    }




    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <CustomToolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, alignSelf: 'flex-start' }}
                    >
                        Kinoverse
                    </Typography>
                    <IconButton size="large" aria-label="search" color="inherit">
                        <Menu />
                    </IconButton>
                </CustomToolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {menuItemList.map((menuItem, index) => (
                        <ListItem button key={menuItem.id} onClick={e => setSelectedItem(menuItem.title)}>
                            <ListItemIcon>
                                {menuItem.icon}
                            </ListItemIcon>
                            <ListItemText primary={menuItem.title} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {contentElement()}
            </Main>
        </Box>
    );
}

export default Admin;















