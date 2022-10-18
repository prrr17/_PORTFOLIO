import Link from 'next/link';
import PLogo from '../public/p_logo.svg';
import styles from './navbar.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function NavItem() {
  return (
    <Navbar collapseOnSelect expand='lg' className={styles.navBar} fixed='top'>
      <Container>
        <Navbar.Brand href='/'>
          <PLogo width='10rem' height='inherit'></PLogo>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='d-flex me-auto'> 
          {/* doesnt work */}
            <Nav.Link href='#about'><a alt ='go to about page'>about</a></Nav.Link>
            
            <Nav.Link href='/andCo'><a alt ='&co go to others page'>&co</a></Nav.Link>

            <Nav.Link href='/designs' ><a alt ='go to designs page'>designs</a></Nav.Link>

            <Nav.Link href='/andCo'><a alt ='&co go to others page'>&co</a></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#findme'><a id='findmeLinkNavBar' alt='find me go to contact page'>find me</a>
            </Nav.Link>           
          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// <nav className={styles.navBar}>
//   <div className='row'>
//     <div className='col-4'>
//       <Link className={styles.navBarLinks} href='/'>
//         <a alt='home' className='PLogo'>
//           {/* <PLogo></PLogo> */}
//         </a>
//       </Link>
//     </div>
//     <ul className={styles.navBarList}>
//       <div className='col-1'>
//         <Link className={styles.navBarLinks} href='#about'>
//           <a id='aboutLinkNavBar' alt='about'>
//             about
//           </a>
//         </Link>
//       </div>
//       <div className='col-2'>
//         <Link className={styles.navBarLinks} href='/designs'>
//           <a id='designsLinkNavBa' alt='designs'>
//             designs
//           </a>
//         </Link>
//       </div>
//       <div className='col-1'>
//         <Link className={styles.navBarLinks} href='/AndCo'>
//           <a id='AndCoLinkNavBa' alt='others'>
//             &co
//           </a>
//         </Link>
//       </div>
//       <div className='col-4'>
//         <Link className={styles.navBarLinks} href='#findme'>
//           <a id='findmeLinkNavBa' alt='findme'>
//             find me
//           </a>
//         </Link>
//       </div>
//     </ul>
//   </div>
// </nav>
//);
//}
