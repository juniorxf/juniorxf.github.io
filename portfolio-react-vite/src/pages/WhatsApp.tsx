// src/pages/WhatsApp.tsx

import { useEffect, useState } from 'react';
import BootScreen from '../components/WhatsAppPhone/BootScreen';
import LockScreen from '../components/WhatsAppPhone/LockScreen';
import HomeScreen from '../components/WhatsAppPhone/HomeScreen';
import WhatsAppPhone from '../components/WhatsAppPhone/WhatsAppPhone';
import LoginPhone from '../components/WhatsAppPhone/LoginPhone';
import PhoneContainer from '../components/PhoneFrame/PhoneContainer';
import axiosInstance from '../utils/axiosInstance';

enum ScreenStage {
  Boot,
  Lock,
  Home,
  WhatsApp
}

export default function WhatsApp() {
  const [stage, setStage] = useState<ScreenStage>(ScreenStage.Boot);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const bootTimeout = setTimeout(() => {
      setStage(ScreenStage.Lock);
    }, 5000);

    return () => clearTimeout(bootTimeout);
  }, []);

  useEffect(() => {
    axiosInstance.get('/auth/me')
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false));
  }, []);

  const handleUnlock = () => setStage(ScreenStage.Home);
  const handleOpenWhatsApp = () => setStage(ScreenStage.WhatsApp);
  const handleBackToHome = () => setStage(ScreenStage.Home);

  if (isAuthenticated === null) {
    return <div>Carregando...</div>;
  }

  return (
    <PhoneContainer>
      {stage === ScreenStage.Boot && <BootScreen />}
      {stage === ScreenStage.Lock && <LockScreen onUnlock={handleUnlock} />}
      {stage === ScreenStage.Home && (
        !isAuthenticated ? (
          <LoginPhone onSuccess={() => setIsAuthenticated(true)} />
        ) : (
          <HomeScreen onOpenWhatsApp={handleOpenWhatsApp} />
        )
      )}
      {stage === ScreenStage.WhatsApp && (
        <WhatsAppPhone onBack={handleBackToHome} />
      )}
    </PhoneContainer>
  );
}
