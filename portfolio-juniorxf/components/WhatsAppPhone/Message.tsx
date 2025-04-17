'use client';

import styles from './styles.module.css'

type MessageProps = {
  text: string;
  type: 'received' | 'sent';
  isFirst: boolean;
  time: string;
};

export default function Message({ text, type, isFirst, time }: MessageProps) {
  const messageClasses = [
    styles.message,
    styles[type], // Adiciona 'sent' ou 'received' como classe dinâmica
    isFirst ? styles.first : '',
  ].join(' ');

  return (
    <div className={messageClasses}>
      <span>{text}</span>
      <span className={styles.messageTime}>{time}</span>
    </div>
  );
}
