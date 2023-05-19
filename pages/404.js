import utilStyles from '../styles/utils.module.scss';
import GoBack from '../components/GoBack';
import Blobs from '../components/Blobs';

export default function Custom404() {
  return (
    <section>
    <GoBack />
    <Blobs />
      <div className='text-center mt-4'>
        <h2 className={utilStyles.heading2Xl}>404 - Page Not Found.</h2>
      </div>
    </section>
  );
}
