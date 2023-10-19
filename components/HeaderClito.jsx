import NavItemClito from './NavItemClito';
import styles from './navbarClito.module.scss';

export default function HeaderClito() {
  return (
    <section className={`header d-flex ${styles.header}`}>
      <NavItemClito />
    </section>
  );
}
