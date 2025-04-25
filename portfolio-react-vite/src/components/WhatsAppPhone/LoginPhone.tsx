// src/components/WhatsAppPhone/LoginPhone.tsx

import { useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import './LoginPhone.css';
import StatusBar from '../PhoneFrame/StatusBar';
import NavigationBar from '../PhoneFrame/NavigationBar';
import { BsThreeDots } from "react-icons/bs";

interface LoginPhoneProps {
  onSuccess: () => void;
  onBack?: () => void;
}

// export default function LoginPhone({ onSuccess }: LoginPhoneProps) {
export default function LoginPhone({ onSuccess, onBack }: LoginPhoneProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post('/auth/login', {
        username,
        password,
      });

      if (response.status === 200) {
        onSuccess();
      }
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Login falhou');
    }
  };

  return (
    <div className="whatsappScreen">
      {/* <StatusBar /> */}
      <StatusBar
        theme="dark"
        leftSlot={
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <i className="fas fa-location-arrow" />
            <BsThreeDots />
          </div>
        }
        className="loginStatusBar"
      />

      <div className="loginBackground">
        <div className="loginScreen">
          <h3>Bem-vindo</h3>
          <input
            placeholder="Usuário"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Entrar</button>
        </div>
      </div>

      {/* <NavigationBar onBack={onBack} /> */}
      <NavigationBar theme="dark" onBack={onBack} className="loginNavigationBar" />
    </div>
  );
}
