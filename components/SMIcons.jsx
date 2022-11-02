import React from 'react';
import Link from 'next/link';
import IgOn from '../public/IgOn.svg';
import IgOff from '../public/IgOff.svg';
import BeOn from '../public/BeOn.svg';
import BeOff from '../public/BeOff.svg';
import InOn from '../public/inOn.svg';
import InOff from '../public/inOff.svg';
import GhOn from '../public/GhOn.svg';
import GhOff from '../public/GhOff.svg';
import utilStyles from '../styles/utils.module.scss';

const SMIcons = () => {
  return (
    <div className='d-flex justify-content-end pe-2 pt-2 align-content-end'>
      <ul className='socialMedia-list mb-0'>
        <div className={utilStyles.iconContainer}>
          <Link
            className='socialMediaLinks py-2'
            href='https://www.instagram.com/inpaulasmind/'
          >
            <a target='_blank' alt='Instagram link @inpaulasmind'>
              <IgOn
                viewBox='-10 -10 100 100'
                className={`rounded-circle ${utilStyles.icon}`}
              ></IgOn>
              <IgOff
                viewBox='-10 -10 100 100'
                className={`rounded-circle ${utilStyles.icon}`}
              ></IgOff>
            </a>
          </Link>
        </div>
        <div className={utilStyles.iconContainer}>
          <Link
            className='socialMediaLinks py-2'
            href='https://github.com/prrr17/'
          >
            <a target='_blank' alt='GitHub link @prrr17'>
              <GhOn
                viewBox='-10 -10 100 100'
                className={`rounded-circle ${utilStyles.icon}`}
              ></GhOn>
              <GhOff className={`rounded-circle ${utilStyles.icon}`}></GhOff>
            </a>
          </Link>
        </div>
        <div className={utilStyles.iconContainer}>
          <Link
            className='socialMediaLinks py-2'
            href='https://www.linkedin.com/in/paula-romero-de-blas/'
          >
            <a
              className={utilStyles.iconContainerLink}
              target='_blank'
              alt='LinkedIn link @paula-romero-de-blas'
            >
              <InOn
                viewBox='-10 -10 100 100'
                className={`rounded-circle ${utilStyles.icon}`}
              ></InOn>
              <InOff
                viewBox='-10 -10 100 100'
                className={`rounded-circle ${utilStyles.icon}`}
              ></InOff>
            </a>
          </Link>
        </div>
        <div className={utilStyles.iconContainer}>
          <Link
            className='socialMediaLinks'
            href='https://www.behance.net/paulardb'
            target='_blank'
          >
            <a alt='Behance @paulardb'>
              <BeOn
                viewBox='-10 -10 100 100'
                className={`rounded-circle ${utilStyles.icon}`}
              ></BeOn>
              <BeOff
                viewBox='-10 -10 100 100'
                className={`rounded-circle ${utilStyles.icon}`}
              ></BeOff>
            </a>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default SMIcons;
