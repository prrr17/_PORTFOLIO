import utilStyles from '../styles/utils.module.scss';
import GoBack from '../components/GoBack';
import Blobs from '../components/Blobs';

export default function Custom404() {
  return (
    <section>
      <div className='mt-5'>
        <GoBack />
      </div>
      <Blobs />
      <div className='text-center my-5'>
        <h2 className={`mb-5 pb-5 ${utilStyles.heading2Xl}`}>404 - Page Not Found.</h2>
      </div>
    </section>
  );
}
