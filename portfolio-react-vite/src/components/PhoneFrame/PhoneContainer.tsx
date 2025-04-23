// src/components/PhoneFrame/PhoneContainer.tsx
import styles from './phoneFrame.module.css';

export default function PhoneContainer({ children }: { children: React.ReactNode }) {
  return <div className={styles.phoneContainer}>{children}</div>;
}
