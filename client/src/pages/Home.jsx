import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />
            <Categories />
            <Newsletter />
        </>
    );
};

export default Home;
