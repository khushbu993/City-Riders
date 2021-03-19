import React from 'react';
import './Home.css';
import backgroundImage from '../../images/Bg.png';
import Header from '../Header/Header';
import Frame from '../Frame/Frame';

const Home = () => {
    const bgStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '120vh'
    }
    return (
        <div style={bgStyle} className="city-rider">
            <Header></Header>
            <Frame></Frame>
        </div>
    );
};

export default Home;