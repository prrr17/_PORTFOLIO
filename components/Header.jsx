import NavItem from './NavItem';
import styles from './navbar.module.scss';

export default function Header() {
  return (
    <section className={`header d-flex ${styles.header}`}>
      <NavItem />
    </section>
  );
}
