import React from 'react';
import Landing from '../components/home/Landing.jsx';
import Purpose from '../components/home/Purpose.jsx';



function Home() {

    // console.log(window.innerWidth);
    return (<div className='Home'>
        <Landing />
        <Purpose />
    </div>);
};

export default Home;
