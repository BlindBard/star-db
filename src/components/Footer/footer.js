import React from 'react';

import Wrapper from '../Wrapper';

import cn from 'classnames';
import styles from './styles.module.scss';

const Footer = ({ onServiceChange }) => {
  return (
    <div className={cn(styles.footer)}>
      <Wrapper className={styles.wrapper}>
        <div
          className={cn(styles.contentWrapper, 'd-flex', 'justify-content-end')}
        >
          <button className="btn btn-primary btn-sm" onClick={onServiceChange}>
            Change Service
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
