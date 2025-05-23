// src/components/WhatsAppPhone/WhatsAppPhone.tsx

import { useState, useEffect } from 'react';
import { sendWhatsAppMessage } from '../../utils/sendWhatsAppMessage';
import StatusBar from '../PhoneFrame/StatusBar';
import NavigationBar from '../PhoneFrame/NavigationBar';
import './WhatsAppPhone.css';

export default function WhatsAppPhone({ onBack }: { onBack: () => void }) {
  // const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [initialTime, setInitialTime] = useState('');
  interface Message {
    text: string;
    time: string;
  }

  const [messages, setMessages] = useState<Message[]>([]);

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

  // const handleSend = async () => {
  //   if (input.trim()) {
  //     const success = await sendWhatsAppMessage(input.trim());
  //     if (success) {
  //       setMessages((prev) => [...prev, input.trim()]);
  //       setInput('');
  //     } else {
  //       alert('Erro ao enviar mensagem via WhatsApp.\nNecessário fazer login.');
  //     }
  //   }
  // };

  const handleSend = async () => {
    if (input.trim()) {
      const success = await sendWhatsAppMessage(input.trim());

      if (success) {
        const now = new Date();
        const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

        setMessages((prev) => [...prev, { text: input.trim(), time }]);
        setInput('');
      } else {
        alert('Erro ao enviar mensagem via WhatsApp.\nNecessário fazer login.');
      }
    }
  };

  return (
    <>
      <div className="whatsappScreen">
        <div className="whatsappHeader">
          <StatusBar
            theme="dark"
            className="whatsStatusBar"
          />
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

          {/* {messages.map((msg, index) => (
            <div
              key={index}
              className={`message sent ${index === 0 ? 'first' : ''}`}
            >
              <span>{msg}</span>
              <span className="messageTime">{initialTime}</span>
            </div>
          ))} */}

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message sent ${index === 0 ? 'first' : ''}`}
            >
              <span>{msg.text}</span>
              <span className="messageTime">{msg.time}</span>
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
