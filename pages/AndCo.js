import utilStyles from '../styles/utils.module.css';

const AndCo = () => {
  return (
    <div className='container mt-5'>
      <div className='row border-bottom border-end border-primary'>
        <h1 className={`${utilStyles.heading3Xl}`}>— Oops. . .</h1>
      </div>
      
      <div className='row p-4 text-end border-end border-primary text-align-end '>
        <h2 className={`text-end pe-5 ${utilStyles.heading2Xl}`}>
          Under Construction 🏗️
        </h2>
      </div>
    </div>
  );
};

export default AndCo;
