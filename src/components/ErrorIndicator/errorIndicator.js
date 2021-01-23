import React from 'react';

import styles from './styles.module.scss';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className={styles.errorIndicator}>
      <img src={icon} alt="error icon" />
      <span className={styles.boom}>BOOM!</span>
      <span>Something has gone terribly wrong</span>
      <span>(But we already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
