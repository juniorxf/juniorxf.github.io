'use client';

import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function Header() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime(); // seta o horário inicial
    const interval = setInterval(updateTime, 60000); // atualiza a cada minuto

    return () => clearInterval(interval); // limpa o intervalo ao desmontar
  }, []);

  return (
    <div className={styles.whatsappHeader}>
      <div className={styles.statusBar}>
        <div className={styles.time}>{currentTime}</div>
        <div className={styles.systemIcons}>
          <i className="fas fa-wifi"></i>
          <i className="fas fa-battery-three-quarters"></i>
        </div>
      </div>
      <div className={styles.chatHeader}>
        <div className={styles.contactInfo}>
          <div className={styles.avatar}>
            <img src="https://github.com/juniorxf.png" alt="Profile" />
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.contactName}>José Freitas</div>
            <div className={styles.onlineStatus}>online</div>
          </div>
        </div>
        <div className={styles.chatActions}>
          <img src="/video.svg" alt="Video call" className={`${styles.actionIcon} ${styles.videoIcon}`} />
          <img src="/phone.svg" alt="Phone call" className={styles.actionIcon} />
          <img src="/ellipsis.svg" alt="Ellipsis" className={styles.actionIcon} />
        </div>
      </div>
    </div>
  );
}
