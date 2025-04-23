// src/components/PhoneFrame/StatusBar.tsx

import { useEffect, useState, ReactNode } from 'react';
import './StatusBar.css';
interface StatusBarProps {
  theme?: 'light' | 'dark';
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  className?: string; // NOVO
}

export default function StatusBar({ theme = 'light', leftSlot, rightSlot, className }: StatusBarProps) {
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
    <div className={`statusBar ${theme} ${className || ''}`}>
      <div className="statusTime">
        {/* {time} */}
        {leftSlot !== undefined ? leftSlot : time}
      </div>
      <div className="systemIcons">
        <i className="fas fa-wifi" />
        <i className="fas fa-battery-three-quarters" />
      </div>
      {rightSlot && <div className="statusRight">{rightSlot}</div>}
    </div>
  );
}
