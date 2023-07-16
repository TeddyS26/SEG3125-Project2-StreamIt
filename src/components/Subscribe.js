import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Subscribe.css';
import basic from './images/basic.jpg';
import standard from './images/standard.jpg';
import premium from './images/premium.jpeg';
import family from './images/family.jpg';
import def from './images/home_background.jpg';

const Subscribe = () => {
    const [plan, setPlan] = useState('None');
    const [price, setPrice] = useState('$--/month');
    const [image, setImage] = useState(def);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardholderName: '',
        expiryDate: '',
        cvc: '',
        name: '',
        email: '',
        phoneNumber: '',
        address: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handlePlanChange = (event) => {
        setPlan(event.target.value);
        switch(event.target.value) {
            case 'Basic':
                setPrice('$7.99/month');
                setImage(basic);
                break;
            case 'Standard':
                setPrice('$11.99/month');
                setImage(standard);
                break;
            case 'Premium':
                setPrice('$15.99/month');
                setImage(premium);
                break;
            case 'Family':
                setPrice('$19.99/month');
                setImage(family);
                break;
            default:
                setPrice('$--/month');
                setImage(def);
        }
    };

    const handleSubmit = () => {
        const isFormComplete = Object.values(formData).every(val => val !== '') && plan !== 'None';

        if (isFormComplete) {
            setShowModal(true);

            setTimeout(() => {
                setShowModal(false);
                navigate('/main');
            }, 2000);
        } else {
            alert('Please fill out all fields before subscribing.');
        }
    };

    return (
        <div className="subscribe-page">
            <h1 className="subscribe-title">Subscribe</h1>
            <div className="subscribe-content">
                <div className="subscribe-left">
                    <div className="plan-selection">
                        <h2>Step 1: Select Plan</h2>
                        <select value={plan} onChange={handlePlanChange}>
                            <option value="None">--Please choose an option--</option>
                            <option value="Basic">Basic Plan</option>
                            <option value="Standard">Standard Plan</option>
                            <option value="Premium">Premium Plan</option>
                            <option value="Family">Family Plan</option>
                        </select>
                    </div>
                    <div className="payment-info">
                        <h2>Step 2: Payment Information</h2>
                        <form>
                            <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleInputChange} value={formData.cardNumber} />
                            <input type="text" name="cardholderName" placeholder="Cardholder Name" onChange={handleInputChange} value={formData.cardholderName} />
                            <input type="text" name="expiryDate" placeholder="Expiry Date" onChange={handleInputChange} value={formData.expiryDate} />
                            <input type="text" name="cvc" placeholder="CVC" onChange={handleInputChange} value={formData.cvc} />
                        </form>
                    </div>
                    <div className="contact-info">
                        <h2>Step 3: Contact Information</h2>
                        <form>
                            <input type="text" name="name" placeholder="Name" onChange={handleInputChange} value={formData.name} />
                            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} value={formData.email} />
                            <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleInputChange} value={formData.phoneNumber} />
                            <input type="text" name="address" placeholder="Address" onChange={handleInputChange} value={formData.address} />
                        </form>
                    </div>
                    <div className="subscribe-button-container">
                        <button onClick={handleSubmit}>Subscribe</button>
                    </div>
                </div>
                <div className="subscribe-right">
                    <h2 className="subscription-info-title">Subscription Information</h2>
                    <div className="subscription-info">
                        <img src={image} alt={plan} />
                        <p>Plan: {plan}</p>
                        <p>Price: {price}</p>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Subscription Successful!</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Subscribe;