import React from 'react';
import basic from './images/basic.jpg'
import standard from './images/standard.jpg'
import premium from './images/premium.jpeg'
import family from './images/family.jpg'
import styles from './Plans.module.css'

const Plans = () => {
  const plans = [
    {
      id: 1,
      title: 'Basic Plan',
      image: basic,
      description: 'Perfect for the casual viewer. Enjoy access to all our movies and shows in standard definition (SD). Stream on one device at a time',
      price: '$7.99/month'
    },
    {
      id: 2,
      title: 'Standard Plan',
      image: standard,
      description: 'Great for the regular viewer. Enjoy all our content in high definition (HD). Stream on up to two devices simultaneously',
      price: '$11.99/month'
    },
    {
      id: 3,
      title: 'Premium Plan',
      image: premium,
      description: 'Ideal for the entertainment enthusiast. Get the best viewing experience with ultra high definition (4K) streaming. Watch on up to four devices at the same time.',
      price: '$15.99/month'
    },
    {
      id: 4,
      title: 'Family Plan',
      image: family,
      description: 'The best choice for families. Enjoy all the benefits of the Premium Plan, plus parental controls and the ability to create multiple user profiles. Stream on up to five devices simultaneously.',
      price: '$19.99/month'
    }
  ];

  return (
    <div className={styles.plans}>
      {plans.map(plan => (
        <div key={plan.id} className={styles.plan}>
          <div className={styles.imageTitleContainer}>
            <h2 className={styles.planTitle}>{plan.title}</h2>
          </div>
          <div className={styles.contentContainer}>
            <img src={plan.image} alt="plan" className={styles.planImage} />
            <ul className={styles.planDescription}>
              {plan.description.split('. ').map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className={styles.planPrice}>{plan.price}</div>
          </div>
        </div>      
    ))}
    </div>
  );
}

export default Plans;