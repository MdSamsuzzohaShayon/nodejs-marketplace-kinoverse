// REACT STUFF 
import React from 'react';

// ROUTER 
import { Routes, Route } from "react-router-dom";

// PAGES 
import Career from './pages/Career';
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import Page404 from './pages/Page404';
// import Contest from './pages/Contest';

// COMPONENTS 
import Navbar from './components/elements/Navbar';
import Footer from './components/elements/Footer';
import RequireAuth from './components/admin/RequiredAuth';
import NotLoggedIn from './components/admin/NotLoggedIn';
import Login from './components/login/Login';
import Privacy from './pages/Privacy';
import Partner from './pages/Partner';

// STYLES 
import './App.css';
import { Box } from '@mui/material';
import useStyles from './styles/App.style.js';

function App() {
  // console.log("App.js - ", process.env.REACT_APP_KEY);

  const classes = useStyles();


  return (
    <Box className={classes.app} >
      <Routes >
        <Route path="/" element={
          <React.Fragment>
            <Navbar />
            <Home />
          </React.Fragment>
        } />
        <Route path="/home" element={
          <React.Fragment>
            <Navbar />
            <Home />
          </React.Fragment>
        } />
        <Route path="/about" element={
          <React.Fragment>
            <Navbar />
            <About />
          </React.Fragment>
        } />
        <Route path="/career" element={
          <React.Fragment>
            <Navbar />
            <Career />
          </React.Fragment>
        } />


        {/* THIS PAGE IS TEMPORARYLY OFF (LOTS OF WORK LEFT IN THIS PAGE) */}
        {/* <Route path="/contest" element={<React.Fragment> <Navbar /> <Contest /> </React.Fragment>} /> */}


        <Route path="/privacy" element={<React.Fragment> <Navbar /> <Privacy /> </React.Fragment>} />
        <Route path="/partner" element={<React.Fragment> <Navbar /> <Partner /> </React.Fragment>} />

        <Route path="/login" element={
          <NotLoggedIn>
            <Navbar />
            <Login />
          </NotLoggedIn>
        } />



        <Route
          path="/admin"
          element={
            <RequireAuth>
              {/* <ProtectedPage /> */}
              {/* <Route path="/admin" element={<Admin />} /> */}
              <Admin />
            </RequireAuth>
          }
        />

        <Route path="*" element={
          <React.Fragment>
            <Navbar />
            <Page404 />
          </React.Fragment>
        } />

      </Routes>

      <Footer />
    </Box >
  );
}

export default App;
