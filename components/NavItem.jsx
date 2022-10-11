import Link from 'next/link';
import pLogo from '../public/p_logo.svg';

export default function NavItem() {
  return (
    <nav className='navBar'>
      <Link href='/'>
        <a alt='home'>
          {/* <img src='/../public/p_logo.svg' alt='logo' /> */}
          {/* <pLogo></pLogo> */}
        </a>
      </Link>

      <ul className='navbar-links'>
        <li>
          <Link href='#about'>
            <a id='about' alt='about'>about</a>
          </Link>
        </li>
        <li>
          <Link href='/designs'>
            <a alt='designs'>designs</a>
          </Link>
        </li>
        <li>
          <Link href='/AndCo'>
            <a alt='Others'>&co</a>
          </Link>
        </li>
        <li>
          <Link href='#findme'>
            <a alt='findme'>find me</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
