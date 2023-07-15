import React from 'react';
import basic from './images/basic.jpg'
import standard from './images/standard.jpg'
import premium from './images/premium.jpeg'
import family from './images/family.jpg'
import styles from './Plans.module.css'
import { useTranslation } from 'react-i18next';

const Plans = () => {
  const { t } = useTranslation();

  const plans = [
    {
      id: 1,
      title: t('basicPlan'),
      image: basic,
      description: t('basicPlanDescription'),
      price: t('basicPlanPrice')
    },
    {
      id: 2,
      title: t('standardPlan'),
      image: standard,
      description: t('standardPlanDescription'),
      price: t('standardPlanPrice')
    },
    {
      id: 3,
      title: t('premiumPlan'),
      image: premium,
      description: t('premiumPlanDescription'),
      price: t('premiumPlanPrice')
    },
    {
      id: 4,
      title: t('familyPlan'),
      image: family,
      description: t('familyPlanDescription'),
      price: t('familyPlanPrice')
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