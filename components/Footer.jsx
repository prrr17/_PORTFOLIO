import React from 'react';
import Link from 'next/link';
import SMIconsFooter from './SMIconsFooter';
import utilStyles from '../styles/utils.module.scss';

const Footer = () => {
  return (<>
    <div className={`${utilStyles.footerBox} d-flex flex-column mx-md-5 mx-2 border-top`}>
      <p className={utilStyles.headingSm}>© 2023 paulardb.design</p>
      <div className='row'>
        <div className='col d-flex align-content-center'>
          <p
            className={`align-self-center mb-0 px-5 border-end ${utilStyles.textDescriptions} ${utilStyles.mail}`}
          >
            <Link
              href='mailto:                      hi@paulardb.design'
              rel='noopener noreferrer'
              target='_blank'
              alt='open email provider to email'
            >
              hi@paulardb.design
            </Link>
          </p></div><div className='col'>
          <div className={`align-content-center px-4`}>  <SMIconsFooter /> </div> 
        </div></div></div></>
  );
};

export default Footer;
