// // src/components/WhatsAppPhone/HomeScreen.tsx
// import { useState, useEffect } from 'react';
// import styles from './HomeScreen.module.css';
// import { RiSettings3Fill } from 'react-icons/ri';
// // import { RiWhatsappFill, RiSettings3Fill } from 'react-icons/ri';

// interface HomeScreenProps {
//   onOpenWhatsApp: () => void;
// }

// export default function HomeScreen({ onOpenWhatsApp }: HomeScreenProps) {
//   const [time, setTime] = useState('');
//   const [date, setDate] = useState('');

//   // Função auxiliar para capitalizar primeira letra
//   const capitalizePrimeiraLetra = (str: string) => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   };

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const hours = now.getHours().toString().padStart(2, '0');
//       const minutes = now.getMinutes().toString().padStart(2, '0');

//       // Formatação da data
//       const diaSemana = capitalizePrimeiraLetra(
//         now.toLocaleDateString('pt-BR', { weekday: 'short' })
//           .replace('.', '')
//       );
//       const dia = now.getDate();
//       const mes = capitalizePrimeiraLetra(
//         now.toLocaleDateString('pt-BR', { month: 'long' })
//       );

//       setTime(`${hours}:${minutes}`);
//       setDate(`${diaSemana}, ${dia} de ${mes}`);
//     };

//     updateTime();
//     const interval = setInterval(updateTime, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className={styles.wrapper}>
//       {/* Conteúdo da tela */}
//       {/* <div className={styles.phoneContainer}> */}
//       <div className={styles.screenContent}>
//         <div className={styles.whatsappScreen}>
//           <div className={styles.whatsappHeader}>
//             <div className={styles.statusBar}>
//               <div className={styles.timeHeader}>{time}</div>
//               <div className={styles.systemIcons}>
//                 <i className="fas fa-wifi" />
//                 <i className="fas fa-battery-three-quarters" />
//               </div>
//             </div>
//             <div className={styles.homeScreen}>
//               <div className={styles.topInfo}>
//                 <div className={styles.time}>{time}</div>
//                 <div className={styles.date}>{date}</div>
//               </div>
//               <div className={styles.appGrid}>
//                 <button className={styles.appButton} onClick={onOpenWhatsApp}>
//                   {/* <RiWhatsappFill className={styles.icon} /> */}
//                   <img src="/whatsapp.svg" alt="Phone" className={styles.icon} />
//                   <span>WhatsApp</span>
//                 </button>
//                 <button className={styles.appButton}>
//                   <RiSettings3Fill className={styles.icon} />
//                   <span>Config</span>
//                 </button>
//                 {/* Adicione outros apps aqui se desejar */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Moldura do celular */}
//       <div className={styles.phone}></div>
//     </div>
//   );
// }


// // src/components/WhatsAppPhone/HomeScreen.tsx
// import { useNavigate } from 'react-router-dom';
// import PhoneContainer from '../PhoneFrame/PhoneContainer';
// import StatusBar from '../PhoneFrame/StatusBar';
// import NavigationBar from '../PhoneFrame/NavigationBar';
// import './HomeScreen.css';

// export default function HomeScreen() {
//   const navigate = useNavigate();

//   return (
//     <PhoneContainer>
//       <div className="home-screen">
//         <StatusBar />
//         <div className="app-grid">
//           <div className="app-icon" onClick={() => navigate('/projetos/whatsapp')}>
//             <img src="/whatsapp.svg" alt="WhatsApp" />
//             <span>WhatsApp</span>
//           </div>
//           {/* Aqui você pode adicionar mais apps se quiser */}
//         </div>
//         <NavigationBar onBack={() => { }} />
//       </div>
//     </PhoneContainer>
//   );
// }

// src/components/WhatsAppPhone/HomeScreen.tsx
// import PhoneContainer from '../PhoneFrame/PhoneContainer';
import { useState, useEffect } from 'react';
import StatusBar from '../PhoneFrame/StatusBar';
import NavigationBar from '../PhoneFrame/NavigationBar';
import { BsThreeDots } from "react-icons/bs";
import './HomeScreen.css';

interface HomeScreenProps {
  onOpenWhatsApp: () => void;
}

export default function HomeScreen({ onOpenWhatsApp }: HomeScreenProps) {

  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  // Função auxiliar para capitalizar primeira letra
  const capitalizePrimeiraLetra = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');

      // Formatação da data
      const diaSemana = capitalizePrimeiraLetra(
        now.toLocaleDateString('pt-BR', { weekday: 'short' })
          .replace('.', '')
      );
      const dia = now.getDate();
      const mes = capitalizePrimeiraLetra(
        now.toLocaleDateString('pt-BR', { month: 'long' })
      );

      setTime(`${hours}:${minutes}`);
      setDate(`${diaSemana}, ${dia} de ${mes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    // <PhoneContainer>
    <div className="home-screen">
      {/* <StatusBar theme='light' /> */}
      <StatusBar
        theme="light"
        leftSlot={
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <i className="fas fa-location-arrow" />
            {/* <i className="fas fa-bluetooth-b" /> */}
            <BsThreeDots />
          </div>
        }
      />
      <div className="top-info">
        <div className="time">{time}</div>
        <div className="date">{date}</div>
      </div>
      <div className="app-grid">
        <div className="app-icon" onClick={onOpenWhatsApp}>
          <img src="/whatsapp.svg" alt="WhatsApp" />
          <span>WhatsApp</span>
        </div>
        {/* Outros apps podem ser adicionados aqui */}
      </div>
      <NavigationBar theme="light" onBack={() => { }} className="homeNavigationBar" />
    </div>
    // </PhoneContainer>
  );
}