// // src/components/WhatsAppPhone/LoginPhone.tsx
// import { useState } from 'react';
// import styles from './styles.module.css'
// import axiosInstance from '../../utils/axiosInstance';

// interface LoginPhoneProps {
//   onSuccess: () => void;
// }

// export default function LoginPhone({ onSuccess }: LoginPhoneProps) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axiosInstance.post('/auth/login', {
//         username,
//         password,
//       });

//       // if (username.trim() && password.trim()) {
//       if (response.status === 200) {
//         // Simula login bem-sucedido
//         onSuccess();
//       }
//       // } else {
//       //   alert('Por favor, preencha todos os campos.');
//       // }
//     } catch (error) {
//       console.error('Erro no login:', error);
//       alert('Login falhou');
//     }
//   };

//   return (
//     <div className={styles.phoneContainer}>
//       <div className={styles.whatsappScreen}>
//         <div className={styles.loginBackground}>
//           <div className={styles.loginScreen}>
//             <h3>Bem-vindo</h3>
//             <input
//               placeholder="Usuário"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               placeholder="Senha"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleLogin}>Entrar</button>
//           </div>
//         </div>
//       </div>

//       {/* <div className={styles.androidNavigation}>
//         <div className={styles.navButton}><i className="fas fa-square"></i></div>
//         <div className={styles.navButton}><img src="/circle.svg" className={styles.navIcon} /></div>
//         <div className={styles.navButton}><i className="fas fa-caret-left"></i></div>
//       </div> */}
//     </div>
//   );
// }


// // src/components/WhatsAppPhone/LoginPhone.tsx
// import { useState } from 'react';
// import styles from './styles.module.css';
// import axiosInstance from '../../utils/axiosInstance';
// // import StatusBar from '../PhoneFrame/StatusBar';
// // import NavigationBar from '../PhoneFrame/NavigationBar';

// interface LoginPhoneProps {
//   onSuccess: () => void;
//   onBack?: () => void;
// }

// // export default function LoginPhone({ onSuccess, onBack }: LoginPhoneProps) {
// export default function LoginPhone({ onSuccess }: LoginPhoneProps) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axiosInstance.post('/auth/login', {
//         username,
//         password,
//       });

//       if (response.status === 200) {
//         onSuccess();
//       }
//     } catch (error) {
//       console.error('Erro no login:', error);
//       alert('Login falhou');
//     }
//   };

//   return (
//     <div className={styles.whatsappScreen}>
//       {/* <StatusBar /> */}

//       <div className={styles.loginBackground}>
//         <div className={styles.loginScreen}>
//           <h3>Bem-vindo</h3>
//           <input
//             placeholder="Usuário"
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             placeholder="Senha"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleLogin}>Entrar</button>
//         </div>
//       </div>

//       {/* <NavigationBar onBack={onBack} /> */}
//     </div>
//   );
// }

// src/components/WhatsAppPhone/LoginPhone.tsx
import { useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import './LoginPhone.css';
// import StatusBar from '../PhoneFrame/StatusBar';
// import NavigationBar from '../PhoneFrame/NavigationBar';

interface LoginPhoneProps {
  onSuccess: () => void;
  onBack?: () => void;
}

export default function LoginPhone({ onSuccess }: LoginPhoneProps) {
  // export default function LoginPhone({ onSuccess, onBack }: LoginPhoneProps) {
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
    </div>
  );
}
