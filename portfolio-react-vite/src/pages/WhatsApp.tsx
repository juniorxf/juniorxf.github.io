// // src/pages/WhatsApp.tsx// src/pages/WhatsApp.tsx

// import { useEffect, useState } from 'react';
// import PhoneContainer from '../components/PhoneFrame/PhoneContainer';
// import BootScreen from '../components/WhatsAppPhone/BootScreen';
// import LockScreen from '../components/WhatsAppPhone/LockScreen';
// import HomeScreen from '../components/WhatsAppPhone/HomeScreen';
// import WhatsAppPhone from '../components/WhatsAppPhone/WhatsAppPhone';
// import LoginPhone from '../components/WhatsAppPhone/LoginPhone';
// import WhatsAppSplash from '../components/WhatsAppPhone/WhatsAppSplash';
// import axiosInstance from '../utils/axiosInstance';

// enum ScreenStage {
//   Boot,
//   Lock,
//   Home,
//   Login,
//   WhatsAppSplash,
//   WhatsApp
// }

// export default function WhatsApp() {
//   const [stage, setStage] = useState<ScreenStage>(ScreenStage.Boot);

//   useEffect(() => {
//     const bootTimeout = setTimeout(() => {
//       setStage(ScreenStage.Lock);
//     }, 5000);

//     return () => clearTimeout(bootTimeout);
//   }, []);

//   const handleUnlock = () => setStage(ScreenStage.Home);

//   const handleOpenWhatsApp = async () => {
//     setStage(ScreenStage.WhatsAppSplash);

//     setTimeout(async () => {
//       try {
//         await axiosInstance.get('/auth/me');
//         setStage(ScreenStage.WhatsApp);
//       } catch {
//         setStage(ScreenStage.Login);
//       }
//     }, 500);
//   };

//   const handleLoginSuccess = () => {
//     setStage(ScreenStage.WhatsApp);
//   };

//   const handleBackToHome = () => setStage(ScreenStage.Home);

//   return (
//     // <div className="screen-wrapper">
//     <PhoneContainer>
//       {stage === ScreenStage.Boot && <BootScreen />}
//       {stage === ScreenStage.Lock && <LockScreen onUnlock={handleUnlock} />}
//       {stage === ScreenStage.Home && <HomeScreen onOpenWhatsApp={handleOpenWhatsApp} />}
//       {stage === ScreenStage.WhatsAppSplash && <WhatsAppSplash />}
//       {/* {stage === ScreenStage.WhatsAppSplash && <WhatsAppSplash onBack={handleBackToHome} />} */}
//       {stage === ScreenStage.Login && <LoginPhone onSuccess={handleLoginSuccess} onBack={handleBackToHome} />}
//       {stage === ScreenStage.WhatsApp && <WhatsAppPhone onBack={handleBackToHome} />}
//     </PhoneContainer>
//     // </div>
//   );
// }

// src/pages/WhatsApp.tsx

import { useEffect, useState, useRef } from 'react';
import PhoneContainer from '../components/PhoneFrame/PhoneContainer';
import BootScreen from '../components/WhatsAppPhone/BootScreen';
import LockScreen from '../components/WhatsAppPhone/LockScreen';
import HomeScreen from '../components/WhatsAppPhone/HomeScreen';
import WhatsAppPhone from '../components/WhatsAppPhone/WhatsAppPhone';
import LoginPhone from '../components/WhatsAppPhone/LoginPhone';
import WhatsAppSplash from '../components/WhatsAppPhone/WhatsAppSplash';
import axiosInstance from '../utils/axiosInstance';

enum ScreenStage {
  Boot,
  Lock,
  Home,
  Login,
  WhatsAppSplash,
  WhatsApp
}

export default function WhatsApp() {
  const [stage, setStage] = useState<ScreenStage>(ScreenStage.Boot);
  const hasOpenedWhatsAppOnce = useRef(false);

  useEffect(() => {
    const lastBootDate = localStorage.getItem('boot-date');
    const today = new Date().toLocaleDateString();

    if (lastBootDate === today) {
      setStage(ScreenStage.Lock);
    } else {
      localStorage.setItem('boot-date', today);
      setStage(ScreenStage.Boot);

      const timeout = setTimeout(() => {
        setStage(ScreenStage.Lock);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, []);

  const handleUnlock = () => setStage(ScreenStage.Home);

  const handleOpenWhatsApp = async () => {
    if (!hasOpenedWhatsAppOnce.current) {
      setStage(ScreenStage.WhatsAppSplash);
      hasOpenedWhatsAppOnce.current = true;

      setTimeout(async () => {
        try {
          await axiosInstance.get('/auth/me');
          setStage(ScreenStage.WhatsApp);
        } catch {
          setStage(ScreenStage.Login);
        }
      }, 1000);
    } else {
      try {
        await axiosInstance.get('/auth/me');
        setStage(ScreenStage.WhatsApp);
      } catch {
        setStage(ScreenStage.Login);
      }
    }
  };

  const handleLoginSuccess = () => {
    setStage(ScreenStage.WhatsApp);
  };

  const handleBackToHome = () => setStage(ScreenStage.Home);

  return (
    <PhoneContainer>
      {stage === ScreenStage.Boot && <BootScreen />}
      {stage === ScreenStage.Lock && <LockScreen onUnlock={handleUnlock} />}
      {stage === ScreenStage.Home && <HomeScreen onOpenWhatsApp={handleOpenWhatsApp} />}
      {stage === ScreenStage.WhatsAppSplash && <WhatsAppSplash />}
      {stage === ScreenStage.Login && <LoginPhone onSuccess={handleLoginSuccess} onBack={handleBackToHome} />}
      {stage === ScreenStage.WhatsApp && <WhatsAppPhone onBack={handleBackToHome} />}
    </PhoneContainer>
  );
}
