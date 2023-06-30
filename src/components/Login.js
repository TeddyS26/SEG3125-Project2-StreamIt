import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === '' || password === '') {
            alert('Please fill out the email and password fields.');
            return;
        }

        navigate('/main');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <h2>Login</h2>
                </div>
                <div className="login-content">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                    <div className="signup-redirect">
                        <span>Don't have an account? </span>
                        <span className="signup-link" onClick={() => navigate('/signup')}>Create one</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;