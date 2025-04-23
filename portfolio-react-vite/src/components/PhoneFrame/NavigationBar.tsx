// src/components/PhoneFrame/NavigationBar.tsx
import styles from './phoneFrame.module.css';

export default function NavigationBar({ onBack }: { onBack?: () => void }) {
  return (
    <div className={styles.androidNavigation}>
      <div className={styles.navButton}><i className="fas fa-square" /></div>
      <div className={styles.navButton}><img src="/circle.svg" className={styles.navIcon} /></div>
      <div className={styles.navButton} onClick={onBack}>
        <i className="fas fa-caret-left" />
      </div>
    </div>
  );
}
