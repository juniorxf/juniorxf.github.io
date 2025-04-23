// src/components/WhatsAppPhone/BootScreen.tsx
import { useEffect, useState } from 'react';
import { SiXiaomi } from 'react-icons/si';
// import PhoneContainer from '../PhoneFrame/PhoneContainer';
// import { PiDotsThree } from "react-icons/pi";
import './BootScreen.css';

export default function BootScreen() {
  const [stage, setStage] = useState<'boot' | 'logo' | 'done'>('boot');

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage('logo'), 1000), // 1s tela preta
      setTimeout(() => setStage('done'), 4000), // 4s logo
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    // <PhoneContainer>
    <div className="boot-wrapper">
      {stage === 'boot' && <div className="boot-screen" />} {/* tela preta */}
      {stage === 'logo' && (
        <div className="logo-screen">
          <SiXiaomi className="logo-icon" />
          <img src="/android.svg" className="android" />
          {/* <PiDotsThree /> */}
        </div>
      )}
      {/* Se for 'done', o redirecionamento ocorre pelo componente pai */}
    </div>
    // </PhoneContainer>
  );
}
