// src/pages/WhatsApp.tsx
import { useEffect, useState } from 'react';
import LoginPhone from '../components/WhatsAppPhone/LoginPhone';
import WhatsAppPhone from '../components/WhatsAppPhone/WhatsAppPhone';
import axiosInstance from '../utils/axiosInstance';

export default function WhatsApp() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // null = carregando

  useEffect(() => {
    axiosInstance.get('/auth/me')
      .then(() => setIsAuthenticated(true)) // Cookie válido
      .catch(() => setIsAuthenticated(false)); // Cookie ausente ou expirado
  }, []);

  if (isAuthenticated === null) {
    return <div>Carregando...</div>; // Tela de loading enquanto verifica
  }

  return !isAuthenticated ? (
    <LoginPhone onSuccess={() => setIsAuthenticated(true)} />
  ) : (
    <WhatsAppPhone />
  );
}

// export default function WhatsApp() {
//   return <WhatsAppPhone />
// }
