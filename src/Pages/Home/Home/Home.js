import React from 'react';
import About from '../About/About';
import Client from '../Client/Client';
import Hero from '../Hero/Hero';
import RecentWeddings from '../RecentWeddings/RecentWeddings';

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <RecentWeddings/>
            <Client/>
        </div>
    );
};

export default Home;