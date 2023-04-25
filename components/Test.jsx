import Link from 'next/link';
import React from 'react';
import PaulaLogo from '../public/paula_logo.svg';

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <>
      <div>
        {/* <a href={href} onClick={onClick} ref={ref}>
          <PaulaLogo width='10rem' height='inherit'></PaulaLogo>
        </a> */}
      </div>
    </>
  );
});

function Test() {
  return (
    <Link href='/' passHref className='d-flex justify-content-end pt-3'>
      <MyButton className='button' />
    </Link>
  );
}

export default Test;
