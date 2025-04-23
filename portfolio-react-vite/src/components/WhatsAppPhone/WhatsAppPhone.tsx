// src/components/WhatsAppPhone/WhatsAppPhone.tsx

import { useState, useEffect } from 'react';
import { sendWhatsAppMessage } from '../../utils/sendWhatsAppMessage';
import StatusBar from '../PhoneFrame/StatusBar';
import NavigationBar from '../PhoneFrame/NavigationBar';
import WhatsAppSplash from './WhatsAppSplash';
import './WhatsAppPhone.css';

export default function WhatsAppPhone({ onBack }: { onBack: () => void }) {
  const [showSplash, setShowSplash] = useState(true);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [initialTime, setInitialTime] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setInitialTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
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
        alert('Erro ao enviar mensagem via WhatsApp.\nNecessário fazer login.');
      }
    }
  };

  if (showSplash) return <WhatsAppSplash />;

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
