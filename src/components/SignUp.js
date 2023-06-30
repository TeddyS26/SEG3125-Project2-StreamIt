import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
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
      alert('Please fill in all fields');
      return;
    }
    
    navigate('/subscribe');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">
          <h2>Create Account</h2>
        </div>
        <div className="signup-content">
          <form onSubmit={handleSubmit}>
            <div className="section">
              <h3>Personal Information</h3>
              <div className="input-row">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="section">
              <h3>Contact Information</h3>
              <div className="input-row">
                <input
                  className="contact-input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="input-row">
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Postal Code"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="section">
              <h3>Password Confirmation</h3>
              <div className="input-row">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;