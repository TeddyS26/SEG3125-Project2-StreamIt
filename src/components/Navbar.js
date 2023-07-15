import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
import canadianFlag from './images/flag1.png';
import frenchFlag from './images/flag2.png';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const location = useLocation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className="navbar">
            <NavLink to="/" className="navbar-brand">
                StreamIt
                <img src={i18n.language === 'en' ? canadianFlag : frenchFlag} alt="Flag" style={{ width: '30px', height: '20px', marginLeft: '10px', border: '2px solid black' }} onClick={() => changeLanguage(i18n.language === 'en' ? 'fr' : 'en')} />
            </NavLink>
            <div className="nav-links">
                <NavLink to="/plans" className={location.pathname === "/plans" ? "activeLink" : ""}>{t('plans')}</NavLink>
                <NavLink to="/movies-shows" className={location.pathname === "/movies-shows" ? "activeLink" : ""}>{t('moviesAndShows')}</NavLink>
                <NavLink to="/subscribe" className={location.pathname === "/subscribe" ? "activeLink" : ""}>{t('subscribe')}</NavLink>
            </div>
            <div className="auth-buttons">
                <NavLink to="/login" className="login-button">{t('logIn')}</NavLink>
                <NavLink to="/signup" className="signup-button">{t('signUp')}</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;