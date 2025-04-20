// src/pages/WhatsApp.tsx
// import { useState } from 'react';
// import LoginPhone from '../components/WhatsAppPhone/LoginPhone';
import WhatsAppPhone from '../components/WhatsAppPhone/WhatsAppPhone';

// export default function WhatsApp() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return !isAuthenticated ? (
//     <LoginPhone onSuccess={() => setIsAuthenticated(true)} />
//   ) : (
//     <WhatsAppPhone />
//   );
// }

export default function WhatsApp() {
  return <WhatsAppPhone />
}
