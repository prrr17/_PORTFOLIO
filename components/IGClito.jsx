import React from 'react';
import Link from 'next/link';
import IgOn from '../public/IgOn.svg';
import IgOff from '../public/IgOff.svg';
import utilStyles from '../styles/utils.module.scss';

const IGClito = () => {
  return (
    <div className='d-flex justify-content-end pe-2 pt-2 align-content-end'>
      <ul className='socialMedia-list mb-0'>
        <div className={utilStyles.iconContainer}>
          <Link
            href='https://instagram.com/laclitonisa_/'
            className='socialMediaLinks py-2'
            target='_blank'
            alt='Instagram link @laclitonisa_'
          >
            <IgOn
              viewBox='-10 -10 100 100'
              className={`rounded-circle ${utilStyles.icon}`}
            ></IgOn>
            <IgOff
              viewBox='-10 -10 100 100'
              className={`rounded-circle ${utilStyles.icon}`}
            ></IgOff>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default IGClito;
