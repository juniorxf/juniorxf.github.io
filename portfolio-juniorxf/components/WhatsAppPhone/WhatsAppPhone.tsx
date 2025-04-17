// // components/WhatsAppPhone/WhatsAppPhone.tsx
// 'use client';

// import { useState } from 'react';
// import styles from './styles.module.css';
// import Header from './Header';
// import Messages from './Messages';
// import InputArea from './InputArea';
// import NavigationBar from './NavigationBar';
// import type { MessageType } from './Messages';

// export default function WhatsAppPhone() {
//   const [messages, setMessages] = useState<MessageType[]>([
//     { id: 1, text: 'Olá! Como posso te ajudar?', type: 'received', time: '12:00' },
//   ]);

//   const addMessage = (text: string) => {
//     const now = new Date();
//     const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes()
//       .toString()
//       .padStart(2, '0')}`;

//     setMessages((prev) => [
//       ...prev,
//       {
//         id: prev.length + 1,
//         text,
//         type: 'sent',
//         time,
//       },
//     ]);
//   };

//   return (
//     <div className={styles.phoneContainer}>
//       <div className={styles.whatsappScreen}>
//         <Header />
//         <Messages messages={messages} />
//         <InputArea onSend={addMessage} />
//         <NavigationBar />
//       </div>
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Header from './Header';
import Messages from './Messages';
import InputArea from './InputArea';
import NavigationBar from './NavigationBar';
import type { MessageType } from './Messages';

export default function WhatsAppPhone() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [initialTime, setInitialTime] = useState('');

  useEffect(() => {
    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, '0')}:${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;

    setInitialTime(time);

    // Define a primeira mensagem quando o componente montar
    setMessages([
      {
        id: 1,
        text: 'Olá! Como posso te ajudar?',
        type: 'received',
        time: time,
      },
    ]);
  }, []);

  const addMessage = (text: string) => {
    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, '0')}:${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text,
        type: 'sent',
        time,
      },
    ]);
  };

  return (
    <div className={styles.phoneContainer}>
      <div className={styles.whatsappScreen}>
        <Header />
        <Messages messages={messages} />
        <InputArea onSend={addMessage} />
        <NavigationBar />
      </div>
    </div>
  );
}
