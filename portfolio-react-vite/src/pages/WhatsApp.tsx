// // src/pages/WhatsApp.tsx
// // import { useEffect, useState } from 'react';
// import BootScreen from '../components/WhatsAppPhone/BootScreen';
// // import LoginPhone from '../components/WhatsAppPhone/LoginPhone';
// import WhatsAppPhone from '../components/WhatsAppPhone/WhatsAppPhone';
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
//   // return <BootScreen />
//   return <WhatsAppPhone />
// }


// // ATUAL:
// // src/pages/WhatsApp.tsx
// import { useEffect, useState } from 'react';
// import BootScreen from '../components/WhatsAppPhone/BootScreen'
// import LockScreen from '../components/WhatsAppPhone/LockScreen';
// import WhatsAppPhone from '../components/WhatsAppPhone/WhatsAppPhone';

// import axiosInstance from '../utils/axiosInstance';
// import LoginPhone from '../components/WhatsAppPhone/LoginPhone';

// enum ScreenStage {
//   Boot,
//   Lock,
//   WhatsApp
// }

// export default function WhatsApp() {
//   const [stage, setStage] = useState<ScreenStage>(ScreenStage.Boot);

//   useEffect(() => {
//     const bootTimeout = setTimeout(() => {
//       setStage(ScreenStage.Lock);
//     }, 5000); // Tempo para sair da tela de boot

//     return () => clearTimeout(bootTimeout);
//   }, []);

//   const handleOpenWhatsApp = () => {
//     setStage(ScreenStage.WhatsApp);
//   };

//   // Para incluir tela de login
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // null = carregando

//   useEffect(() => {
//     axiosInstance.get('/auth/me')
//       .then(() => setIsAuthenticated(true)) // Cookie válido
//       .catch(() => setIsAuthenticated(false)); // Cookie ausente ou expirado
//   }, []);

//   if (isAuthenticated === null) {
//     return <div>Carregando...</div>; // Tela de loading enquanto verifica
//   }

//   return !isAuthenticated ? (
//     <div className="appContainer">
//       {stage === ScreenStage.Boot && <BootScreen />}
//       {stage === ScreenStage.Lock && <LockScreen onUnlock={handleOpenWhatsApp} />}
//       {/* {stage === ScreenStage.WhatsApp && <WhatsApp />} */}
//       {stage === ScreenStage.WhatsApp && (
//         <LoginPhone onSuccess={() => setIsAuthenticated(true)} />
//       )}
//     </div>
//   ) : (
//     <div className="appContainer">
//       <WhatsAppPhone />
//     </div>
//   )
// }


// // src/pages/WhatsApp.tsx
// import { useEffect, useState } from 'react';
// import BootScreen from '../components/WhatsAppPhone/BootScreen';
// import LockScreen from '../components/WhatsAppPhone/LockScreen';
// import HomeScreen from '../components/WhatsAppPhone/HomeScreen';
// import WhatsAppPhone from '../components/WhatsAppPhone/WhatsAppPhone';
// // import LoginPhone from '../components/WhatsAppPhone/LoginPhone';
// import axiosInstance from '../utils/axiosInstance';

// enum ScreenStage {
//   Boot,
//   Lock,
//   Home,
//   WhatsApp
// }

// export default function WhatsApp() {
//   const [stage, setStage] = useState<ScreenStage>(ScreenStage.Boot);
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // null = carregando

//   // Aguarda o boot e muda para lock
//   useEffect(() => {
//     const bootTimeout = setTimeout(() => {
//       setStage(ScreenStage.Lock);
//     }, 5000);

//     return () => clearTimeout(bootTimeout);
//   }, []);

//   // Verifica cookie de autenticação
//   useEffect(() => {
//     axiosInstance.get('/auth/me')
//       .then(() => setIsAuthenticated(true))
//       .catch(() => setIsAuthenticated(false));
//   }, []);

//   const handleUnlock = () => setStage(ScreenStage.Home);
//   const handleOpenWhatsApp = () => setStage(ScreenStage.WhatsApp);

//   if (isAuthenticated === null) {
//     return <div>Carregando...</div>;
//   }

//   return (
//     <div className="appContainer">
//       {stage === ScreenStage.Boot && <BootScreen />}
//       {stage === ScreenStage.Lock && <LockScreen onUnlock={handleUnlock} />}
//       {stage === ScreenStage.Home && (
//         // !isAuthenticated ? (
//         //   <LoginPhone onSuccess={() => setIsAuthenticated(true)} />
//         // ) : (
//         //   <HomeScreen onOpenWhatsApp={handleOpenWhatsApp} />
//         // )
//         <HomeScreen onOpenWhatsApp={handleOpenWhatsApp} />
//       )}
//       {stage === ScreenStage.WhatsApp && <WhatsAppPhone />}
//     </div>
//   );
// }

// // src/pages/WhatsApp.tsx
// import { useEffect, useState } from 'react';
// import BootScreen from '../components/WhatsAppPhone/BootScreen';
// import LockScreen from '../components/WhatsAppPhone/LockScreen';
// import HomeScreen from '../components/WhatsAppPhone/HomeScreen';
// import WhatsAppPhone from '../components/WhatsAppPhone/WhatsAppPhone';
// import LoginPhone from '../components/WhatsAppPhone/LoginPhone';
// import axiosInstance from '../utils/axiosInstance';

// enum ScreenStage {
//   Boot,
//   Lock,
//   Home,
//   WhatsApp
// }

// export default function WhatsApp() {
//   const [stage, setStage] = useState<ScreenStage>(ScreenStage.Boot);
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // null = carregando

//   // Aguarda o boot e muda para lock
//   useEffect(() => {
//     const bootTimeout = setTimeout(() => {
//       setStage(ScreenStage.Lock);
//     }, 5000);

//     return () => clearTimeout(bootTimeout);
//   }, []);

//   // Verifica cookie de autenticação
//   useEffect(() => {
//     axiosInstance.get('/auth/me')
//       .then(() => setIsAuthenticated(true))
//       .catch(() => setIsAuthenticated(false));
//   }, []);

//   const handleUnlock = () => setStage(ScreenStage.Home);
//   const handleOpenWhatsApp = () => setStage(ScreenStage.WhatsApp);
//   const handleBackToHome = () => setStage(ScreenStage.Home);

//   if (isAuthenticated === null) {
//     return <div>Carregando...</div>;
//   }

//   return (
//     <div className="appContainer">
//       {stage === ScreenStage.Boot && <BootScreen />}
//       {stage === ScreenStage.Lock && <LockScreen onUnlock={handleUnlock} />}
//       {stage === ScreenStage.Home && (
//         !isAuthenticated ? (
//           <LoginPhone onSuccess={() => setIsAuthenticated(true)} />
//         ) : (
//           <HomeScreen onOpenWhatsApp={handleOpenWhatsApp} />
//         )
//       )}
//       {stage === ScreenStage.WhatsApp && (
//         <WhatsAppPhone onBack={handleBackToHome} />
//       )}
//     </div>
//   );
// }

// src/pages/WhatsApp.tsx
import { useEffect, useState } from 'react';
import BootScreen from '../components/WhatsAppPhone/BootScreen';
import LockScreen from '../components/WhatsAppPhone/LockScreen';
import HomeScreen from '../components/WhatsAppPhone/HomeScreen';
import WhatsAppPhone from '../components/WhatsAppPhone/WhatsAppPhone';
// import LoginPhone from '../components/WhatsAppPhone/LoginPhone';
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
        // !isAuthenticated ? (
        //   <LoginPhone onSuccess={() => setIsAuthenticated(true)} />
        // ) : (
        <HomeScreen onOpenWhatsApp={handleOpenWhatsApp} />
        // )
      )}
      {stage === ScreenStage.WhatsApp && (
        <WhatsAppPhone onBack={handleBackToHome} />
      )}
    </PhoneContainer>
  );
}
