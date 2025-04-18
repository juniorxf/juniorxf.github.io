// src/components/WhatsAppPhone/LoginPhone.tsx
import { useState } from 'react';
import styles from './styles.module.css'

interface LoginPhoneProps {
  onSuccess: () => void;
}

export default function LoginPhone({ onSuccess }: LoginPhoneProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      // Simula login bem-sucedido
      onSuccess();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className={styles.phoneContainer}>
      <div className={styles.whatsappScreen}>
        <div className={styles.loginBackground}>
          <div className={styles.loginScreen}>
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
      </div>

      <div className={styles.androidNavigation}>
        <div className={styles.navButton}><i className="fas fa-square"></i></div>
        <div className={styles.navButton}><img src="/circle.svg" className={styles.navIcon} /></div>
        <div className={styles.navButton}><i className="fas fa-caret-left"></i></div>
      </div>
    </div>
  );
}
