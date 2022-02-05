import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Career from './pages/Career';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/elements/Navbar';
import Footer from './components/elements/Footer';
import Admin from './pages/Admin';
import RequireAuth from './components/admin/RequiredAuth';
import NotLoggedIn from './components/admin/NotLoggedIn';
import Login from './components/admin/Login';
import { Box } from '@mui/material';
import useStyles from './styles/App.style.js';

function App() {
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
      </Routes>

      <Footer />
    </Box >
  );
}

export default App;
