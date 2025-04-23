// src/components/PhoneFrame/StatusBar.tsx
import { useEffect, useState } from 'react';
import styles from './phoneFrame.module.css';

export default function StatusBar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      setTime(`${h}:${m}`);
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.statusBar}>
      <div className={styles.time}>{time}</div>
      <div className={styles.systemIcons}>
        <i className="fas fa-wifi" />
        <i className="fas fa-battery-three-quarters" />
      </div>
    </div>
  );
}
