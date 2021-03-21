import React from 'react';
import './Home.css';
import backgroundImage from '../../images/Bg.png';
import Header from '../Header/Header';
import Rides from '../Rides/Rides';




const Home = () => {
    const bgStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh'
    }
    return (
        <div style={bgStyle} className="city-rider">
            <Header></Header>
            <Rides></Rides>
        </div>
    );
};

export default Home;