import React from 'react';
import backgroundImage from './images/home_background.jpg';
import tvImage from './images/tv.png';
import mobileImage from './images/laptop.png';
import './Home.css';

const Home = () => {
    const homeStyle = {
        backgroundImage: `linear-gradient(rgba(103, 58, 183, 0.6), rgba(178, 149, 229, 0.6)), url(${backgroundImage})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const aboutStyle = {
        backgroundImage: `linear-gradient(rgba(103, 58, 183, 1), rgba(178, 149, 229, 1))`,
        color: 'white',
        textAlign: 'center',
        padding: '0 20px'
    };

    const handleButtonClick = () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='home-page'>
            <div style={homeStyle}>
                <div className="home-content">
                    <div className="welcome-text">
                        <p>Welcome to StreamIt, the one-stop place to watch all your favourites movies and shows</p>
                    </div>
                    <button onClick={handleButtonClick}>Learn More</button>
                </div>
            </div>
            <div id="about" style={aboutStyle}>
                <div className="intro-text">
                    <p>StreamIt is your one-stop platform for premium entertainment, offering a diverse range of movies and shows across various genres. We're committed to delivering high-quality streaming experiences, personalized to your tastes and preferences.</p>
                </div>
                <div className="row1">
                    <div className="column">
                        <h3>Enjoy on your TV</h3>
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div className="column">
                        <img src={tvImage} alt="TV" />
                    </div>
                </div>
                <div className="row2">
                    <div className="column">
                        <img src={mobileImage} alt="Mobile" />
                    </div>
                    <div className="column">
                        <h3>Watch Everywhere</h3>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;