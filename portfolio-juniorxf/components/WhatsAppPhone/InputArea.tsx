// 'use client';

// import { useState } from 'react';
// import styles from './styles.module.css';

// export default function InputArea() {
//   const [input, setInput] = useState('');

//   const sendMessage = () => {
//     if (!input.trim()) return;
//     console.log('Mensagem enviada:', input);
//     setInput('');
//   };

//   return (
//     <div className={styles.inputArea}>
//       <input
//         type="text"
//         placeholder="Mensagem"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
//       />
//       <button onClick={sendMessage}>
//         <img src="/send.svg" alt="Send" className={styles.sendIcon} />
//       </button>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import styles from './styles.module.css';

interface InputAreaProps {
  onSend: (text: string) => void;
}

export default function InputArea({ onSend }: InputAreaProps) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className={styles.inputArea}>
      <input
        type="text"
        placeholder="Mensagem"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSend}>
        <img src="/send.svg" alt="Send" className={styles.sendIcon} />
      </button>
    </div>
  );
}
