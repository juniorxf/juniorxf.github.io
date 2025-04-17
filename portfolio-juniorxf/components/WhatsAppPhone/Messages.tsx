// 'use client';

// import { useState } from 'react';
// import styles from './styles.module.css';
// import Message from './Message';

// export type MessageType = {
//   id: number;
//   text: string;
//   type: 'received' | 'sent';
//   time: string;
// };

// export default function Messages() {
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
//     <div className={styles.messages}>
//       {messages.map((msg, i) => (
//         <Message
//           key={msg.id}
//           text={msg.text}
//           type={msg.type}
//           isFirst={i === 0}
//           time={msg.time}
//         />
//       ))}

//       {/* Botão de teste */}
//       {/* <button onClick={() => addMessage('Teste')}>Enviar teste</button> */}
//     </div>
//   );
// }

'use client';

import styles from './styles.module.css';
import Message from './Message';

export type MessageType = {
  id: number;
  text: string;
  type: 'sent' | 'received';
  time: string;
};

interface MessagesProps {
  messages: MessageType[];
}

export default function Messages({ messages }: MessagesProps) {
  return (
    <div className={styles.messages}>
      {messages.map((msg, i) => (
        <Message key={msg.id} text={msg.text} type={msg.type} isFirst={i === 0} time={msg.time} />
      ))}
    </div>
  );
}

