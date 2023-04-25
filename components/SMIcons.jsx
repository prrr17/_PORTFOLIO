import React from 'react';
import Link from 'next/link';
import IgOn from '../public/IgOn.svg';
import IgOff from '../public/IgOff.svg';
import BeOn from '../public/BeOn.svg';
import BeOff from '../public/BeOff.svg';
import InOn from '../public/InOn.svg';
import InOff from '../public/InOff.svg';
import GhOn from '../public/GhOn.svg';
import GhOff from '../public/GhOff.svg';
import utilStyles from '../styles/utils.module.scss';

const SMIcons = () => {
  return (
    <div className='d-flex justify-content-end pe-2 pt-2 align-content-end'>
      <ul className='socialMedia-list mb-0'>
        <div className={utilStyles.iconContainer}>
          <Link href='https://www.instagram.com/inpaulasmind/'
              className='socialMediaLinks py-2'
              target='_blank'
              alt='Instagram link @inpaulasmind'
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
        <div className={utilStyles.iconContainer}>
          <Link href='https://github.com/prrr17/'
              className='socialMediaLinks py-2'
              target='_blank'
              alt='GitHub link @prrr17'
            >
              <GhOn
                viewBox='-10 -10 100 100'
                className={`rounded-circle ${utilStyles.icon}`}
              ></GhOn>
              <GhOff
                viewBox='-10 -10 100 100'
                className={`rounded-circle ${utilStyles.icon}`}
              ></GhOff>
             
          </Link>
        </div>
        <div className={utilStyles.iconContainer}>
          <Link href='https://www.linkedin.com/in/paula-romero-de-blas/'
              className='socialMediaLinks py-2'
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
             
          </Link>
        </div>
        <div className={utilStyles.iconContainer}>
          <Link href='https://www.behance.net/paulardb'
              className='socialMediaLinks'
              target='_blank'
              alt='Behance @paulardb'
            >
              <BeOn
                viewBox='-10 -10 100 100'
                className={`rounded-circle ${utilStyles.icon}`}
              ></BeOn>
              <BeOff
                viewBox='-10 -10 100 100'
                className={`rounded-circle ${utilStyles.icon}`}
              ></BeOff>
             
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default SMIcons;
