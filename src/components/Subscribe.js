import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Subscribe.css';
import basic from './images/basic.jpg';
import standard from './images/standard.jpg';
import premium from './images/premium.jpeg';
import family from './images/family.jpg';
import def from './images/home_background.jpg';
import { useTranslation } from 'react-i18next';

const Subscribe = () => {
    const { t } = useTranslation();

    const [plan, setPlan] = useState(t('none'));
    const [price, setPrice] = useState(t('noCharge'));
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
                setPrice(t('basicPlanPrice'));
                setImage(basic);
                break;
            case 'Standard':
                setPrice(t('standardPlanPrice'));
                setImage(standard);
                break;
            case 'Premium':
                setPrice(t('premiumPlanPrice'));
                setImage(premium);
                break;
            case 'Family':
                setPrice(t('familyPlanPrice'));
                setImage(family);
                break;
            default:
                setPrice(t('noCharge'));
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
            alert(t('alert3'));
        }
    };

    return (
        <div className="subscribe-page">
            <h1 className="subscribe-title">{t('subscribe')}</h1>
            <div className="subscribe-content">
                <div className="subscribe-left">
                    <div className="plan-selection">
                        <h2>{t('step1')}</h2>
                        <select value={plan} onChange={handlePlanChange}>
                            <option value="None">{t('option0')}</option>
                            <option value="Basic">{t('basicPlan')}</option>
                            <option value="Standard">{t('standardPlan')}</option>
                            <option value="Premium">{t('premiumPlan')}</option>
                            <option value="Family">{t('familyPlan')}</option>
                        </select>
                    </div>
                    <div className="payment-info">
                        <h2>{t('step2')}</h2>
                        <form>
                            <input type="text" name="cardNumber" placeholder={t('cardNumber')} onChange={handleInputChange} value={formData.cardNumber} />
                            <input type="text" name="cardholderName" placeholder={t('holderName')} onChange={handleInputChange} value={formData.cardholderName} />
                            <input type="text" name="expiryDate" placeholder={t('expiry')} onChange={handleInputChange} value={formData.expiryDate} />
                            <input type="text" name="cvc" placeholder={t('cvc')} onChange={handleInputChange} value={formData.cvc} />
                        </form>
                    </div>
                    <div className="contact-info">
                        <h2>{t('step3')}</h2>
                        <form>
                            <input type="text" name="name" placeholder={t('name')} onChange={handleInputChange} value={formData.name} />
                            <input type="email" name="email" placeholder={t('email')} onChange={handleInputChange} value={formData.email} />
                            <input type="tel" name="phoneNumber" placeholder={t('number')} onChange={handleInputChange} value={formData.phoneNumber} />
                            <input type="text" name="address" placeholder={t('address')}onChange={handleInputChange} value={formData.address} />
                        </form>
                    </div>
                    <div className="subscribe-button-container">
                        <button onClick={handleSubmit}>{t('subscribe')}</button>
                    </div>
                </div>
                <div className="subscribe-right">
                    <h2 className="subscription-info-title">{t('subscriptionInformation')}</h2>
                    <div className="subscription-info">
                        <img src={image} alt={plan} />
                        <p>{t('planColon')} {plan}</p>
                        <p>{t('priceColon')} {price}</p>
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