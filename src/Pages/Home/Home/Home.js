import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Gallery></Gallery>
            <Contact></Contact>
        </div>
    );
};

export default Home;