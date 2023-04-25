import Test from './Test';
import Link from 'next/link';

import utilStyles from '../styles/utils.module.scss';
import { MdArrowBackIosNew } from 'react-icons/md';

const GoBack = () => {
  return (
    <div className='row gx-0 '>
      <div className='col-1 text-end'>
        {' '}
        <Link href='/ ' className={utilStyles.backChevron}>
          <MdArrowBackIosNew> </MdArrowBackIosNew>{' '}
        </Link>
      </div>
      <div className='col-6'>
        <Link href='/ ' className={utilStyles.backChevron}>
          <p
            className={`text-start ${utilStyles.headingMd} ${utilStyles.goBackText}`}
          >
            Go back
          </p>
        </Link>
      </div>
    </div>
  );
};

export default GoBack;
