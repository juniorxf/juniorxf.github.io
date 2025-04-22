// src/components/WhatsAppPhone/HomeScreen.tsx
import { useState, useEffect } from 'react';
import styles from './HomeScreen.module.css';
import { RiSettings3Fill } from 'react-icons/ri';
// import { RiWhatsappFill, RiSettings3Fill } from 'react-icons/ri';

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
    <div className={styles.phoneContainer}>
      <div className={styles.whatsappScreen}>
        <div className={styles.homeScreen}>
          <div className={styles.topInfo}>
            <div className={styles.time}>{time}</div>
            <div className={styles.date}>{date}</div>
          </div>
          <div className={styles.appGrid}>
            <button className={styles.appButton} onClick={onOpenWhatsApp}>
              {/* <RiWhatsappFill className={styles.icon} /> */}
              <img src="/whatsapp.svg" alt="Phone" className={styles.icon} />
              <span>WhatsApp</span>
            </button>
            <button className={styles.appButton}>
              <RiSettings3Fill className={styles.icon} />
              <span>Config</span>
            </button>
            {/* Adicione outros apps aqui se desejar */}
          </div>
        </div>
      </div>
    </div>
  );
}
