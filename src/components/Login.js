import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useTranslation } from 'react-i18next';

function Login() {
    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === '' || password === '') {
          alert(t('alert1'));
          return;
        }
    
        navigate('/main');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <h2 id="loginHeading">{t('login')}</h2>
                </div>
                <div className="login-content">
                    <input
                        type="email"
                        placeholder={t('email')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label={t('email')}
                        aria-required="true"
                    />
                    <input
                        type="password"
                        placeholder={t('password')}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-label={t('password')}
                        aria-required="true"
                    />
                    <button onClick={handleLogin} aria-labelledby="loginHeading">{t('login')}</button>
                    <div className="signup-redirect">
                        <span>{t('noaccount')}</span>
                        <span className="signup-link" onClick={() => navigate('/signup')} tabindex="0">{t('createone')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;