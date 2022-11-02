import React from 'react';
import utilStyles from '../styles/utils.module.scss';
import Blob1 from '../public/Blob1.svg';
import Blob2 from '../public/Blob2.svg';
import Blob3 from '../public/Blob3.svg';
import Blob4 from '../public/Blob4.svg';

const Blobs = () => {
  return (
    <div className={`position-absolute ${utilStyles.wrapper}`}>
      <Blob1 className={`${utilStyles.blob1} ${utilStyles.blob}`}></Blob1>
      <Blob2 className={`${utilStyles.blob2} ${utilStyles.blob}`}></Blob2>
      <Blob3 className={`${utilStyles.blob3} ${utilStyles.blob}`}></Blob3>
      <Blob4 className={`${utilStyles.blob4} ${utilStyles.blob}`}></Blob4>
    </div>
  );
};

export default Blobs;
