import React from 'react';
import backgroundImage from './images/home_background.jpg';
import tvImage from './images/tv.png';
import mobileImage from './images/laptop.png';
import './Home.css';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

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
                    <div className="welcome-text" role="heading" aria-level="1">
                        <p>{t('welcome')}</p>
                    </div>
                    <button onClick={handleButtonClick} aria-label={t('learnmore')}>{t('learnmore')}</button>
                </div>
            </div>
            <div id="about" style={aboutStyle}>
                <div className="intro-text" role="heading" aria-level="2">
                    <p>{t('about')}</p>
                </div>
                <div className="row1">
                    <div className="column">
                        <h3>{t('enjoy1')}</h3>
                        <p>{t('watchon1')}</p>
                    </div>
                    <div className="column">
                        <img src={tvImage} alt="Television icon" />
                    </div>
                </div>
                <div className="row2">
                    <div className="column">
                        <img src={mobileImage} alt="Mobile device icon" />
                    </div>
                    <div className="column">
                        <h3>{t('enjoy2')}</h3>
                        <p>{t('watchon2')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;