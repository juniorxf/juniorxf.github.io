// // src/components/PhoneFrame/PhoneContainer.tsx
// import styles from './phoneFrame.module.css';

// export default function PhoneContainer({ children }: { children: React.ReactNode }) {
//   return <div className={styles.phoneContainer}>{children}</div>;
// }

// src/components/PhoneFrame/PhoneContainer.tsx
import './PhoneContainer.css';

interface PhoneContainerProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
}

export default function PhoneContainer({ children, theme = 'light' }: PhoneContainerProps) {
  return (
    <div className={`phoneContainer ${theme}`}>
      {children}
    </div>
  );
}
