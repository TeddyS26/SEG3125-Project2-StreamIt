import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useTranslation } from 'react-i18next';

function SignUp() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isFieldEmpty = Object.values(formData).some(value => value === '');

    if (isFieldEmpty) {
      alert(t('alert2'));
      return;
    }

    navigate('/subscribe');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">
          <h2>{t('createAccount')}</h2>
        </div>
        <div className="signup-content">
          <form onSubmit={handleSubmit}>
            <div className="section">
              <h3>{t('personalInformation')}</h3>
              <div className="input-row">
                <input
                  type="text"
                  placeholder={t('name')}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder={t('country')}
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="section">
              <h3>{t('contactInformation')}</h3>
              <div className="input-row">
                <input
                  className="contact-input"
                  type="email"
                  placeholder={t('email')}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className="contact-input"
                  type="text"
                  placeholder={t('number')}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="input-row">
                <input
                  className="contact-input"
                  type="text"
                  placeholder={t('address')}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <input
                  className="contact-input"
                  type="text"
                  placeholder={t('code')}
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="section">
              <h3>{t('passwordConfirmation')}</h3>
              <div className="input-row">
                <input
                  type="password"
                  placeholder={t('password')}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder={t('confirm')}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit">
              {t('createAccount')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;