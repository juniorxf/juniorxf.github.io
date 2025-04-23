// // src/components/PhoneFrame/NavigationBar.tsx
// import styles from './phoneFrame.module.css';

// export default function NavigationBar({ onBack }: { onBack?: () => void }) {
//   return (
//     <div className={styles.androidNavigation}>
//       <div className={styles.navButton}><i className="fas fa-square" /></div>
//       <div className={styles.navButton}><img src="/circle.svg" className={styles.navIcon} /></div>
//       <div className={styles.navButton} onClick={onBack}>
//         <i className="fas fa-caret-left" />
//       </div>
//     </div>
//   );
// }

// src/components/PhoneFrame/NavigationBar.tsx
import './NavigationBar.css';

interface NavigationBarProps {
  onBack?: () => void;
  theme?: 'light' | 'dark';
  className?: string; // novo
}

export default function NavigationBar({ onBack, theme = 'light', className = '' }: NavigationBarProps) {
  return (
    <div className={`navigationBar ${theme} ${className}`}>
      {/* <div className={`androidNavigation ${theme}`}> */}
      <div className="navButton">
        <i className="fas fa-square"></i>
      </div>
      <div className="navButton">
        <img src="/circle.svg" className="navIcon" alt="Home" />
      </div>
      <div className="navButton" onClick={onBack}>
        <i className="fas fa-caret-left"></i>
      </div>
    </div>
  );
}

