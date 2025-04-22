// src/components/WhatsAppPhone/WhatsAppPhone.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { sendWhatsAppMessage } from '../../utils/sendWhatsAppMessage';

export default function WhatsAppPhone() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [initialTime, setInitialTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setInitialTime(`${hours}:${minutes}`);
    };

    updateTime(); // atualiza imediatamente
    const interval = setInterval(updateTime, 60000); // atualiza a cada minuto

    return () => clearInterval(interval); // limpa o intervalo ao desmontar
  }, []);

  useEffect(() => {
    const savedMessages = localStorage.getItem('whatsapp-messages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('whatsapp-messages', JSON.stringify(messages));
  }, [messages]);

  const handleSend = async () => {
    if (input.trim()) {
      const success = await sendWhatsAppMessage(input.trim());

      if (success) {
        setMessages((prev) => [...prev, input.trim()]);
        setInput('');
      } else {
        alert('Erro ao enviar mensagem via WhatsApp.');
      }
    }
  };

  return (
    <div className={styles.phoneContainer}>
      <div className={styles.whatsappScreen}>
        <div className={styles.whatsappHeader}>
          <div className={styles.statusBar}>
            <div className={styles.time}>{initialTime}</div>
            <div className={styles.systemIcons}>
              <i className="fas fa-wifi" />
              <i className="fas fa-battery-three-quarters" />
            </div>
          </div>
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

      <div className={styles.androidNavigation}>
        <div className={styles.navButton}><i className="fas fa-square"></i></div>
        <div className={styles.navButton}><img src="/circle.svg" className={styles.navIcon} /></div>
        {/* <div className={styles.navButton}><i className="fas fa-caret-left"></i></div> */}
        <div
          className={styles.navButton}
          onClick={() => navigate('/projetos/whatsapp/lock')}
        >
          <i className="fas fa-caret-left"></i>
        </div>
      </div>
    </div>
  );
}
