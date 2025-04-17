// // app/projetos/whatsapp/page.tsx
// 'use client';

// import { useEffect, useState } from 'react';
// import WhatsAppPhone from '@/components/WhatsAppPhone/WhatsAppPhone';
// import LoginPhone from '@/components/WhatsAppPhone/LoginPhone';
// import axios from 'axios';

// export default function WhatsAppPage() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const response = await axios.get('https://app.help7.com.br/auth/me', {
//           withCredentials: true,
//         });
//         if (response.status === 200) {
//           setIsAuthenticated(true);
//         }
//       } catch (err) {
//         setIsAuthenticated(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   if (!isAuthenticated) {
//     return <LoginPhone onSuccess={() => setIsAuthenticated(true)} />;
//   }

//   return <WhatsAppPhone />;
// }

// app/projetos/whatsapp/page.tsx
'use client';

import { useEffect, useState } from 'react';
import LayoutWithSidebar from '@/app/layouts/LayoutWithSidebar';
import WhatsAppPhone from '@/components/WhatsAppPhone/WhatsAppPhone';
import LoginPhone from '@/components/WhatsAppPhone/LoginPhone';

export default function WhatsAppPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // // Autenticação só será considerada após login
  // if (!isAuthenticated) {
  //   return <LoginPhone onSuccess={() => setIsAuthenticated(true)} />;
  // }

  // return <WhatsAppPhone />;

  return (
    <LayoutWithSidebar>
      {isAuthenticated ? (
        <WhatsAppPhone />
      ) : (
        <LoginPhone onSuccess={() => setIsAuthenticated(true)} />
      )}
    </LayoutWithSidebar>
  );
}
