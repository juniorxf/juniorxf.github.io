// src/components/LockScreen.tsx
import './LockScreen.css';
import { useEffect, useState } from 'react';
import { FaWhatsappSquare } from "react-icons/fa";

interface LockScreenProps {
  onUnlock: () => void;
}

export default function LockScreen({ onUnlock }: LockScreenProps) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="phoneContainer">
      <div className="whatsappScreen">
        <div className="lock-screen" onClick={onUnlock}>
          <div className="lock-status-bar">
            <div className="lock-time">{time}</div>
            <div className="lock-weather">Nublado 25ºC</div>
          </div>
          {/* <img src="/wallpaper.jpg" alt="Wallpaper" className="lock-wallpaper" /> */}
          <div className="lock-app-icons">
            <div className="lock-icon">
              <FaWhatsappSquare />
              {/* <img src="/whatsapp-icon.png" alt="WhatsApp" /> */}
              <span>WhatsApp CRM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
