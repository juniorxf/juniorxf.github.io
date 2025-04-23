// // src/components/WhatsAppPhone/WhatsAppPhone.tsx

// import { useState } from 'react';
// import PhoneContainer from '../PhoneFrame/PhoneContainer';
// import StatusBar from '../PhoneFrame/StatusBar';
// import NavigationBar from '../PhoneFrame/NavigationBar';
// import styles from './styles.module.css';

// export default function WhatsAppPhone({ onBack }: { onBack: () => void }) {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [input, setInput] = useState('');

//   const handleSend = () => {
//     if (input.trim()) {
//       setMessages((prev) => [...prev, input.trim()]);
//       setInput('');
//     }
//   };

//   const now = new Date();
//   const initialTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

//   return (
//     <PhoneContainer>
//       <div className={styles.whatsappScreen}>
//         <div className={styles.whatsappHeader}>
//           <StatusBar />
//           <div className={styles.chatHeader}>
//             <div className={styles.contactInfo}>
//               <div className={styles.avatar}>
//                 <img src="https://github.com/juniorxf.png" alt="Profile" />
//               </div>
//               <div className={styles.contactDetails}>
//                 <div className={styles.contactName}>José Freitas</div>
//                 <div className={styles.onlineStatus}>online</div>
//               </div>
//             </div>
//             <div className={styles.chatActions}>
//               <img src="/video.svg" alt="Video" className={`${styles.actionIcon} ${styles.videoIcon}`} />
//               <img src="/phone.svg" alt="Phone" className={styles.actionIcon} />
//               <img src="/ellipsis.svg" alt="More" className={styles.actionIcon} />
//             </div>
//           </div>
//         </div>

//         <div className={styles.messages}>
//           <div className={`${styles.message} ${styles.received} ${styles.first}`}>
//             <span>Olá! Como posso te ajudar?</span>
//             <span className={styles.messageTime}>{initialTime}</span>
//           </div>

//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`${styles.message} ${styles.sent} ${index === 0 ? styles.first : ''}`}
//             >
//               <span>{msg}</span>
//               <span className={styles.messageTime}>{initialTime}</span>
//             </div>
//           ))}
//         </div>

//         <div className={styles.inputArea}>
//           <input
//             type="text"
//             placeholder="Mensagem"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//           />
//           <button onClick={handleSend}>
//             <img src="/send.svg" alt="Send" className={styles.sendIcon} />
//           </button>
//         </div>
//       </div>

//       <NavigationBar onBack={onBack} />
//     </PhoneContainer>
//   );
// }


// FUNCIONANDO:
// src/components/WhatsAppPhone/WhatsAppPhone.tsx

// import { useState } from 'react';
// import StatusBar from '../PhoneFrame/StatusBar';
// import NavigationBar from '../PhoneFrame/NavigationBar';
// import styles from './styles.module.css';

// export default function WhatsAppPhone({ onBack }: { onBack: () => void }) {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [input, setInput] = useState('');

//   const handleSend = () => {
//     if (input.trim()) {
//       setMessages((prev) => [...prev, input.trim()]);
//       setInput('');
//     }
//   };

//   const now = new Date();
//   const initialTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

//   return (
//     <>
//       <div className={styles.whatsappScreen}>
//         <div className={styles.whatsappHeader}>
//           <StatusBar theme='dark' />
//           {/* <StatusBar theme='light' /> */}
//           <div className={styles.chatHeader}>
//             <div className={styles.contactInfo}>
//               <div className={styles.avatar}>
//                 <img src="https://github.com/juniorxf.png" alt="Profile" />
//               </div>
//               <div className={styles.contactDetails}>
//                 <div className={styles.contactName}>José Freitas</div>
//                 <div className={styles.onlineStatus}>online</div>
//               </div>
//             </div>
//             <div className={styles.chatActions}>
//               <img src="/video.svg" alt="Video" className={`${styles.actionIcon} ${styles.videoIcon}`} />
//               <img src="/phone.svg" alt="Phone" className={styles.actionIcon} />
//               <img src="/ellipsis.svg" alt="More" className={styles.actionIcon} />
//             </div>
//           </div>
//         </div>

//         <div className={styles.messages}>
//           <div className={`${styles.message} ${styles.received} ${styles.first}`}>
//             <span>Olá! Como posso te ajudar?</span>
//             <span className={styles.messageTime}>{initialTime}</span>
//           </div>

//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`${styles.message} ${styles.sent} ${index === 0 ? styles.first : ''}`}
//             >
//               <span>{msg}</span>
//               <span className={styles.messageTime}>{initialTime}</span>
//             </div>
//           ))}
//         </div>

//         <div className={styles.inputArea}>
//           <input
//             type="text"
//             placeholder="Mensagem"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//           />
//           <button onClick={handleSend}>
//             <img src="/send.svg" alt="Send" className={styles.sendIcon} />
//           </button>
//         </div>
//       </div>

//       <NavigationBar onBack={onBack} theme='dark' />
//     </>
//   );
// }

// src/components/WhatsAppPhone/WhatsAppPhone.tsx

import { useState } from 'react';
import StatusBar from '../PhoneFrame/StatusBar';
import NavigationBar from '../PhoneFrame/NavigationBar';
import './WhatsAppPhone.css';

export default function WhatsAppPhone({ onBack }: { onBack: () => void }) {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, input.trim()]);
      setInput('');
    }
  };

  const now = new Date();
  const initialTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

  return (
    <>
      <div className="whatsappScreen">
        <div className="whatsappHeader">
          <StatusBar theme='dark' />
          <div className="chatHeader">
            <div className="contactInfo">
              <div className="avatar">
                <img src="https://github.com/juniorxf.png" alt="Profile" />
              </div>
              <div className="contactDetails">
                <div className="contactName">José Freitas</div>
                <div className="onlineStatus">online</div>
              </div>
            </div>
            <div className="chatActions">
              <img src="/video.svg" alt="Video" className="actionIcon videoIcon" />
              <img src="/phone.svg" alt="Phone" className="actionIcon" />
              <img src="/ellipsis.svg" alt="More" className="actionIcon" />
            </div>
          </div>
        </div>

        <div className="messages">
          <div className="message received first">
            <span>Olá! Como posso te ajudar?</span>
            <span className="messageTime">{initialTime}</span>
          </div>

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message sent ${index === 0 ? 'first' : ''}`}
            >
              <span>{msg}</span>
              <span className="messageTime">{initialTime}</span>
            </div>
          ))}
        </div>

        <div className="inputArea">
          <input
            type="text"
            placeholder="Mensagem"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>
            <img src="/send.svg" alt="Send" className="sendIcon" />
          </button>
        </div>
      </div>

      <NavigationBar onBack={onBack} theme='dark' className="whatsappNavigationBar" />
    </>
  );
}
