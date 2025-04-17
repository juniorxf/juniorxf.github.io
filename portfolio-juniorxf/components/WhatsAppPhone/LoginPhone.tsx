// // components/WhatsAppPhone/LoginPhone.tsx
// 'use client';

// import { useState } from 'react';
// import styles from './styles.module.css';
// import axios from 'axios';

// interface LoginPhoneProps {
//   onSuccess: () => void;
// }

// export default function LoginPhone({ onSuccess }: LoginPhoneProps) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     if (!username.trim() || !password.trim()) {
//       alert('Por favor, preencha todos os campos.');
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await axios.post(
//         'https://app.help7.com.br/auth/login',
//         { username, password },
//         { withCredentials: true }
//       );

//       if (response.status === 200) {
//         onSuccess();
//       } else {
//         throw new Error('Login falhou');
//       }
//     } catch (error) {
//       alert('Erro ao fazer login. Verifique suas credenciais.');
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={styles.loginBackground}>
//       <div className={styles.loginScreen}>
//         <h3>Bem-vindo</h3>
//         <input
//           type="text"
//           placeholder="Usuário"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Senha"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={handleLogin} disabled={loading}>
//           {loading ? 'Entrando...' : 'Entrar'}
//         </button>
//       </div>
//     </div>
//   );
// }

// components/WhatsAppPhone/LoginPhone.tsx
'use client';

import { useState } from 'react';
import styles from './styles.module.css';
import axios from 'axios';
import Header from './Header';
import Messages from './Messages';
import InputArea from './InputArea';
import NavigationBar from './NavigationBar';

interface LoginPhoneProps {
  onSuccess: () => void;
}

export default function LoginPhone({ onSuccess }: LoginPhoneProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        'https://app.help7.com.br/auth/login',
        { username, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        onSuccess();
      } else {
        throw new Error('Login falhou');
      }
    } catch (error) {
      alert('Erro ao fazer login. Verifique suas credenciais.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.phoneContainer}>
      <div className={styles.whatsappScreen}>
        {/* <Header /> */}

        <div className={styles.loginBackground}>
          <div className={styles.loginScreen}>
            <h3 className={styles.loginTitle}>Bem-vindo</h3>
            <input
              className={styles.loginInput}
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className={styles.loginInput}
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className={styles.loginButton}
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </div>
        </div>

        {/* <NavigationBar /> */}
      </div>
    </div>
  );
}
