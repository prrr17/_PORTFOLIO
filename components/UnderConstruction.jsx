import React from 'react';
import utilStyles from '../styles/utils.module.scss';

const UnderConstruction = () => {
  return (
    <div>
      <div className='row mt-5 border-bottom  border-primary'>
        <div className='col-10 border-end border-primary'>
          <h1 className={`pt-4 ${utilStyles.heading3Xl}`}>Oops. . .</h1>
        </div>
        <div className='col-2'>
          <h1 className={` ${utilStyles.heading3Xl}`}></h1>
        </div>
      </div>

      <div className='row p-4 text-end border-primary  '>
        <h2 className={`text-end pe-5 ${utilStyles.heading2Xl}`}>
          Under Construction 🏗️
        </h2>
      </div>
      <div className='row border-top border-primary '>
        <h2 className={`text-end pe-5 ${utilStyles.heading2Xl}`}>.</h2>
      </div>
    </div>
  );
};

export default UnderConstruction;
