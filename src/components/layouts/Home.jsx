import React from 'react';
import Banner from '../Banner';
import Header from '../Header';
import Footer from '../Footer';
import Services from '../Services';
import About from '../About';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;