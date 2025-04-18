// src/layouts/LayoutWithSidebar.tsx
import { ReactNode } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutWithSidebar({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
