// // src/components/PhoneFrame/StatusBar.tsx
// import { useEffect, useState } from 'react';
// import styles from './phoneFrame.module.css';

// export default function StatusBar() {
//   const [time, setTime] = useState('');

//   useEffect(() => {
//     const update = () => {
//       const now = new Date();
//       const h = now.getHours().toString().padStart(2, '0');
//       const m = now.getMinutes().toString().padStart(2, '0');
//       setTime(`${h}:${m}`);
//     };
//     update();
//     const interval = setInterval(update, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className={styles.statusBar}>
//       <div className={styles.time}>{time}</div>
//       <div className={styles.systemIcons}>
//         <i className="fas fa-wifi" />
//         <i className="fas fa-battery-three-quarters" />
//       </div>
//     </div>
//   );
// }


// src/components/PhoneFrame/StatusBar.tsx
import { useEffect, useState, ReactNode } from 'react';
import './StatusBar.css';

interface StatusBarProps {
  theme?: 'light' | 'dark';
  leftSlot?: ReactNode; // 👈 permite sobrescrever o horário
}

export default function StatusBar({ theme = 'light', leftSlot }: StatusBarProps) {
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
    <div className={`statusBar ${theme}`}>
      <div className="statusTime">
        {/* {time} */}
        {leftSlot !== undefined ? leftSlot : time}
      </div>
      <div className="systemIcons">
        <i className="fas fa-wifi" />
        <i className="fas fa-battery-three-quarters" />
      </div>
    </div>
  );
}
