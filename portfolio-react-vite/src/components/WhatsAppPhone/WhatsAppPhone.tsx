// src/components/WhatsAppPhone/WhatsAppPhone.tsx

import { useState } from 'react';
import PhoneContainer from '../PhoneFrame/PhoneContainer';
import StatusBar from '../PhoneFrame/StatusBar';
import NavigationBar from '../PhoneFrame/NavigationBar';
import styles from './styles.module.css';

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
    <PhoneContainer>
      <div className={styles.whatsappScreen}>
        <div className={styles.whatsappHeader}>
          <StatusBar />
          <div className={styles.chatHeader}>
            <div className={styles.contactInfo}>
              <div className={styles.avatar}>
                <img src="https://github.com/juniorxf.png" alt="Profile" />
              </div>
              <div className={styles.contactDetails}>
                <div className={styles.contactName}>José Freitas</div>
                <div className={styles.onlineStatus}>online</div>
              </div>
            </div>
            <div className={styles.chatActions}>
              <img src="/video.svg" alt="Video" className={`${styles.actionIcon} ${styles.videoIcon}`} />
              <img src="/phone.svg" alt="Phone" className={styles.actionIcon} />
              <img src="/ellipsis.svg" alt="More" className={styles.actionIcon} />
            </div>
          </div>
        </div>

        <div className={styles.messages}>
          <div className={`${styles.message} ${styles.received} ${styles.first}`}>
            <span>Olá! Como posso te ajudar?</span>
            <span className={styles.messageTime}>{initialTime}</span>
          </div>

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${styles.message} ${styles.sent} ${index === 0 ? styles.first : ''}`}
            >
              <span>{msg}</span>
              <span className={styles.messageTime}>{initialTime}</span>
            </div>
          ))}
        </div>

        <div className={styles.inputArea}>
          <input
            type="text"
            placeholder="Mensagem"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>
            <img src="/send.svg" alt="Send" className={styles.sendIcon} />
          </button>
        </div>
      </div>

      <NavigationBar onBack={onBack} />
    </PhoneContainer>
  );
}
