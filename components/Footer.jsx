import React from 'react';
import utilStyles from '../styles/utils.module.scss';

const Footer = () => {
  return (
    <div className={`${utilStyles.footerBox}`}>
      <p className={utilStyles.headingSm}>© 2023 paulardb.design</p>
    </div>
  );
};

export default Footer;
