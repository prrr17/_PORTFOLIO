import utilStyles from '../styles/utils.module.scss';

export default function Custom500() {
  return (<div className='container-fluid p-4 text-center bg-light'>
      <h2 className={`mb-5 pb-5 ${utilStyles.heading2Xl}`}>500 - Server-side error occurred.</h2>
    </div>
  )
}
