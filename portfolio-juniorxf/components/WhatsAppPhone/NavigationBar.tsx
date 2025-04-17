'use client';

import styles from './styles.module.css';

export default function NavigationBar() {
  return (
    <div className={styles.androidNavigation}>
      <div className={styles.navButton}><i className="fas fa-square"></i></div>
      <div className={styles.navButton}><img src="/circle.svg" alt="Circle" className={styles.navIcon} /></div>
      <div className={styles.navButton}><i className="fas fa-caret-left"></i></div>
    </div>
  );
}
