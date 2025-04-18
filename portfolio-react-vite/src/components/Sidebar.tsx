import { NavLink } from 'react-router-dom';
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>JF</h2>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
          <i className="fas fa-home" /> <span>Início</span>
        </NavLink>
        <NavLink to="/sobre" className={({ isActive }) => isActive ? styles.active : ''}>
          <i className="fas fa-user" /> <span>Sobre</span>
        </NavLink>
        <NavLink to="/projetos" className={({ isActive }) => isActive ? styles.active : ''}>
          <i className="fas fa-code" /> <span>Projetos</span>
        </NavLink>
        <NavLink to="/projetos/whatsapp" className={({ isActive }) => isActive ? styles.active : ''}>
          <i className="fab fa-whatsapp" /> <span>WhatsApp</span>
        </NavLink>
      </nav>
    </aside>
  );
}
