import React from 'react';
import Shop from '../Shop/Shop';
import Banner from './Banner/Banner';
import Feature from './Feature/Feature';
import Featurebanner from './Featurebanner/Featurebanner';
import './Home.css';
import Topsale from './Topsale/Topsale';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Feature></Feature>
            <Topsale></Topsale>
            <Featurebanner></Featurebanner>
            <Shop></Shop>
        </>
    );
};

export default Home;