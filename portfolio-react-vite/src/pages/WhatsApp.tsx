// // src/pages/WhatsApp.tsx
// // import { useEffect, useState } from 'react';
// import BootScreen from '../components/WhatsAppPhone/BootScreen';
// // import LoginPhone from '../components/WhatsAppPhone/LoginPhone';
// // import WhatsAppPhone from '../components/WhatsAppPhone/WhatsAppPhone';
// // import axiosInstance from '../utils/axiosInstance';

// // export default function WhatsApp() {
// //   // const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // null = carregando

// //   useEffect(() => {
// //     axiosInstance.get('/auth/me')
// //       .then(() => setIsAuthenticated(true)) // Cookie válido
// //       .catch(() => setIsAuthenticated(false)); // Cookie ausente ou expirado
// //   }, []);

// //   if (isAuthenticated === null) {
// //     return <div>Carregando...</div>; // Tela de loading enquanto verifica
// //   }

// //   return !isAuthenticated ? (
// //     <LoginPhone onSuccess={() => setIsAuthenticated(true)} />
// //   ) : (
// //     <WhatsAppPhone />
// //   );
// // }

// export default function WhatsApp() {
//   return <BootScreen />
//   // return <WhatsAppPhone />
// }


// src/App.tsx
import { useEffect, useState } from 'react';
import BootScreen from '../components/WhatsAppPhone/BootScreen'
// import BootScreen from './components/BootScreen';
import LockScreen from '../components/WhatsAppPhone/LockScreen';
// import LockScreen from './components/LockScreen';
// import WhatsApp from './pages/WhatsApp';
import WhatsAppPhone from '../components/WhatsAppPhone/WhatsAppPhone';
// import './App.css';

enum ScreenStage {
  Boot,
  Lock,
  WhatsApp
}

export default function WhatsApp() {
  const [stage, setStage] = useState<ScreenStage>(ScreenStage.Boot);

  useEffect(() => {
    const bootTimeout = setTimeout(() => {
      setStage(ScreenStage.Lock);
    }, 3000); // Tempo para sair da tela de boot

    return () => clearTimeout(bootTimeout);
  }, []);

  const handleOpenWhatsApp = () => {
    setStage(ScreenStage.WhatsApp);
  };

  return (
    <div className="appContainer">
      {stage === ScreenStage.Boot && <BootScreen />}
      {stage === ScreenStage.Lock && <LockScreen onUnlock={handleOpenWhatsApp} />}
      {/* {stage === ScreenStage.WhatsApp && <WhatsApp />} */}
      {stage === ScreenStage.WhatsApp && <WhatsAppPhone />}
    </div>
  );
}
