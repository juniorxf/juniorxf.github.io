// // src/components/LockScreen.tsx
// import './LockScreen.css';
// import { useEffect, useState } from 'react';
// // import { FaWhatsappSquare } from "react-icons/fa";
// import { SlArrowUp } from "react-icons/sl";

// interface LockScreenProps {
//   onUnlock: () => void;
// }

// export default function LockScreen({ onUnlock }: LockScreenProps) {
//   const [time, setTime] = useState('');
//   const [date, setDate] = useState('');

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const hours = now.getHours().toString().padStart(2, '0');
//       const minutes = now.getMinutes().toString().padStart(2, '0');

//       // Formatação do dia da semana com primeira letra maiúscula
//       const day = now.toLocaleDateString('pt-BR', { weekday: 'long' })
//         .replace(/^\w/, c => c.toUpperCase());

//       // Formatação da data curta (dia/mês)
//       const shortDate = now.toLocaleDateString('pt-BR', {
//         day: '2-digit',
//         month: '2-digit'
//       });

//       setTime(`${hours}:${minutes}`);
//       setDate(`${day}, ${shortDate}`);
//     };

//     updateTime();
//     const interval = setInterval(updateTime, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="phoneContainer">
//       <div className="whatsappScreen">
//         <div className="whatsappHeader">
//           <div className="statusBar">
//             <div className="systemIcons">
//               <i className="fas fa-wifi" />
//               <i className="fas fa-battery-three-quarters" />
//             </div>
//           </div>
//         </div>
//         <div className="lock-screen" onClick={onUnlock}>
//           <div className="lock-status-bar">
//             <div className="lock-time">{time}</div>
//             {/* <div className="lock-weather">Nublado 25ºC</div> */}
//             <div className="lock-date">{date}</div>
//           </div>
//           <div className="lock-app-icons">
//             <div className="lock-icon">
//               {/* <FaWhatsappSquare /> */}
//               <SlArrowUp className="arrow" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/components/WhatsAppPhone/LockScreen.tsx
import './LockScreen.css';
import { useEffect, useState } from 'react';
import PhoneContainer from '../PhoneFrame/PhoneContainer';
// import StatusBar from '../PhoneFrame/StatusBar';
// import NavigationBar from '../PhoneFrame/NavigationBar';
import { SlArrowUp } from "react-icons/sl";

interface LockScreenProps {
  onUnlock: () => void;
}

export default function LockScreen({ onUnlock }: LockScreenProps) {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');

      const day = now.toLocaleDateString('pt-BR', { weekday: 'long' })
        .replace(/^\w/, c => c.toUpperCase());

      const shortDate = now.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit'
      });

      setTime(`${hours}:${minutes}`);
      setDate(`${day}, ${shortDate}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PhoneContainer>
      <div className="lock-screen" onClick={onUnlock}>
        {/* <StatusBar /> */}
        <div className="lock-status-bar">
          <div className="lock-time">{time}</div>
          <div className="lock-date">{date}</div>
        </div>
        <div className="lock-app-icons">
          <div className="lock-icon">
            <SlArrowUp className="arrow" />
          </div>
        </div>
        {/* <NavigationBar onBack={() => { }} /> */}
      </div>
    </PhoneContainer>
  );
}
