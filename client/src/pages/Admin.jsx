// IMPORT REACT REDUX 
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../redux/slices/userSlice.js';
import { getAllSubscribers, getAllWaitlist, getAllPartner } from '../redux/slices/subscriberSlice';

// REACT ROUTER 
import { useNavigate } from 'react-router-dom';

// IMPORT MATERIAL UI 
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, CssBaseline, List, Divider, ListItemText, ListItem, IconButton, ListItemIcon, Typography, Button } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { Person, ChevronRight, ChevronLeft, Menu, People, HourglassBottom, GroupWork } from "@mui/icons-material";
import { CustomToolbar } from '../styles/Theme.style.js';
import useStyles from '../styles/Admin.style.js';



// IMPORT CUSTOM ELEMENT AND FUNCTIONS 
import Users from '../components/admin/Users';
import Subscriber from '../components/admin/Subscriber';
import Waitlist from '../components/admin/Waitlist';
import Partners from '../components/admin/Partners';





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
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const USERS = "Users", SUB = "Subscribers", WAITLIST = "Waitlist", PARTNERS = "Partners";

    const currentUser = JSON.parse(localStorage.getItem('user'));

    const theme = useTheme();



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
        dispatch(getAllWaitlist());
        dispatch(getAllPartner());

    }, []);




    const initialMenuItemList = [
        { id: 1, title: USERS, icon: <Person /> },
        { id: 2, title: SUB, icon: <People /> },
        { id: 3, title: WAITLIST, icon: <HourglassBottom /> },
        { id: 4, title: PARTNERS, icon: <GroupWork /> }
    ];

    const [menuItemList, setMenuItemList] = useState(initialMenuItemList);
    const [selectedItem, setSelectedItem] = useState(USERS);

    const contentElement = () => {
        // console.log(userList);
        switch (selectedItem) {
            case USERS:
                return <Users currentUser={currentUser} />
            case SUB:
                return <Subscriber />;
            case WAITLIST:
                return <Waitlist />;
            case PARTNERS:
                return <Partners />
        }
    }


    const logoutHandler = (e) => {
        localStorage.clear();
        navigate('/login');
    }



    return (
        <Box sx={{ display: 'flex' }} className={classes.admin_page}>
            <CssBaseline />
            <AppBar position="fixed" color='error' open={open}>
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
                    <Button color="inherit" sx={{ textTransform: 'capitalize' }} onClick={logoutHandler} >Logout</Button>
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















