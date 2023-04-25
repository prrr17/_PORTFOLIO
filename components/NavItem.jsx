import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { GoPrimitiveDot } from 'react-icons/go';
import PLogo from '../public/p_logo.svg';
import ThemeToggle from './ThemeToggle';
import styles from './navbar.module.scss';

export default function NavItem() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='sm'
        className={`px-5 ${styles.navBar}`}
        fixed='top'
      >
        <div>
          {' '}
          <Navbar.Brand href='/' className='' alt='Paula logo'>
            <PLogo width='10rem' height='inherit'></PLogo>
          </Navbar.Brand>
          <div className={`${styles.dotBox}`}>
            <GoPrimitiveDot className={`${styles.P} ${styles.underDot}`} />
          </div>
        </div>
        <Navbar.Toggle
          className={styles.navbarTogglerIcon}
          aria-controls='responsive-navbar-nav'
        />
        <Navbar.Collapse
          className={styles.burgerMenu}
          id='responsive-navbar-nav'
        >
          <Nav className='d-flex me-auto justify-content-center w-100'>
            {/* doesnt work */}
            <div className=''>
              <Nav.Link href='/#about' alt='go to about page'>
                about
              </Nav.Link>
              <div className={`d-flex justify-content-center ${styles.dotBox}`}>
                <GoPrimitiveDot className={styles.underDot} />
              </div>
            </div>

            <div>
              <Nav.Link href='/designs' alt='go to designs page'>
                {' '}
                designs
              </Nav.Link>
              <div className={`d-flex justify-content-center ${styles.dotBox}`}>
                <GoPrimitiveDot className={styles.underDot} />
              </div>
            </div>

            <div>
              <Nav.Link href='/andCo' alt='&co go to others page'>
                &co
              </Nav.Link>
              <div className={`d-flex justify-content-center ${styles.dotBox}`}>
                <GoPrimitiveDot className={styles.underDot} />
              </div>
            </div>
          </Nav>
          <Nav className='d-flex'>
            <div>
              {' '}
              <Nav.Link
                href='/#findme'
                id='findmeLinkNavBar'
                alt='find me go to contact page'
                className='text-nowrap d-flex'
              >
                find me
              </Nav.Link>{' '}
              <div className={`d-flex justify-content-center ${styles.dotBox}`}>
                <GoPrimitiveDot className={styles.underDot} />
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link
          href='#'
          id='ThemeSwitch'
          alt='switch between light and dark mode'
          className='text-nowrap d-flex justify-content-center align-items-center pb-3 ps-4'
        >
          <ThemeToggle />{' '}
        </Nav.Link>{' '}
      </Navbar>
    </>
  );
}
