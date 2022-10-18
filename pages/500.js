import utilStyles from '../styles/utils.module.css';

export default function Custom500() {
  return (<div className='container-fluid p-4 text-center bg-light'>
      <h2 className={utilStyles.heading2Xl}>500 - Server-side error occurred.</h2>
    </div>
  )
}
