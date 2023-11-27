import { useRouter } from 'next/router';
import { MdArrowBackIosNew } from 'react-icons/md';

import utilStyles from '../styles/utils.module.scss';

const GoBack = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className='row gx-0'>
      <div className='col-1 text-end' onClick={handleGoBack} style={{ cursor: 'pointer' }}>
        <MdArrowBackIosNew style={{ fontSize: '2rem' }} />
      </div>
      <div className='col-6'>
        <p className={`text-start ${utilStyles.headingMd} ${utilStyles.goBackText}`}>
         
        </p>
      </div>
    </div>
  );
};

export default GoBack;