import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Community from '../Community/Community';
import Offerings from '../Offerings/Offerings';
import TravelersReview from '../TravelersReview/TravelersReview';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offerings></Offerings>
            <TravelersReview></TravelersReview>
            <Community></Community>
            <Footer></Footer>
        </div>
    );
};

export default Home;