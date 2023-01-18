import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { GoPrimitiveDot } from 'react-icons/go';
import PLogo from '../public/p_logo.svg';
import ThemeToggle from './ThemeToggle';
import styles from './navbar.module.scss';

export default function NavItem() {
  return (
    <Navbar
      collapseOnSelect
      expand='sm'
      className={`px-5 ${styles.navBar}`}
      fixed='top'
    >
      <div>
        {' '}
        <Navbar.Brand href='/'>
          <a className='' alt='Paula logo'>
            <PLogo width='10rem' height='inherit'></PLogo>
          </a>
        </Navbar.Brand>
        <div className={`${styles.dotBox}`}>
          <GoPrimitiveDot className={`${styles.P} ${styles.underDot}`} />
        </div>
      </div>
      <Navbar.Toggle
        className={styles.navbarTogglerIcon}
        aria-controls='responsive-navbar-nav'
      />
      <Navbar.Collapse className={styles.burgerMenu} id='responsive-navbar-nav'>
        <Nav className='d-flex me-auto justify-content-center w-100'>
          {/* doesnt work */}
          <div className=''>
            <Nav.Link href='#about'>
              <a alt='go to about page'>about</a>
            </Nav.Link>
            <div className={`d-flex justify-content-center ${styles.dotBox}`}>
              <GoPrimitiveDot className={styles.underDot} />
            </div>
          </div>

          <div>
            <Nav.Link href='/designs'>
              <a alt='go to designs page'>designs</a>
            </Nav.Link>
            <div className={`d-flex justify-content-center ${styles.dotBox}`}>
              <GoPrimitiveDot className={styles.underDot} />
            </div>
          </div>

          <div>
            <Nav.Link href='/andCo'>
              <a alt='&co go to others page'>&co</a>
            </Nav.Link>
            <div className={`d-flex justify-content-center ${styles.dotBox}`}>
              <GoPrimitiveDot className={styles.underDot} />
            </div>
          </div>
        </Nav>
        <Nav className='d-flex'>
          <div>
            {' '}
            <Nav.Link href='#findme'>
              <a
                id='findmeLinkNavBar'
                alt='find me go to contact page'
                className='text-nowrap d-flex'
              >
                find me
              </a>
            </Nav.Link>{' '}
            <div className={`d-flex justify-content-center ${styles.dotBox}`}>
              <GoPrimitiveDot className={styles.underDot} />
            </div>
          </div>
        </Nav>
      </Navbar.Collapse>
      <Nav.Link href='#'>
        <a
          id='ThemeSwitch'
          alt='switch between light and dark mode'
          className='text-nowrap d-flex justify-content-center align-items-center pb-3 ps-4'
        >
          <ThemeToggle />{' '}
        </a>
      </Nav.Link>{' '}
    </Navbar>
  );
}
