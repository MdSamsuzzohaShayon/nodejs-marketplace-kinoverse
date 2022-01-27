import React from 'react';
import Login from '../components/Login';
import Profile from '../components/Profile';
import ChangeColor from '../components/ChangeColor';
import Navbar from '../components/elements/Navbar';


const Career = (props) => {
    return (<div>
        <Navbar />
        Career
        <Profile />
        <Login />
        <br />
        <ChangeColor />
    </div>);
};

export default Career;
