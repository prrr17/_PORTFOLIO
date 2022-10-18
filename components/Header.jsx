import NavItem from './NavItem';
import styles from './navbar.module.css'

export default function Header() {
  return (
    <section className={`header ${styles.header}`}>
  <NavItem />
  </section>);
}
