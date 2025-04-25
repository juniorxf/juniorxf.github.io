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