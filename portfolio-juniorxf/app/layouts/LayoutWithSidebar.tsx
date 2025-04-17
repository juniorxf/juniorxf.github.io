// app/layouts/LayoutWithSidebar.tsx
'use client';

import React from 'react';
import styles from './layout.module.css';
import { FaWhatsapp, FaChartBar, FaUserFriends, FaCog } from 'react-icons/fa';
import { IoPhonePortrait, IoPhonePortraitOutline } from "react-icons/io5";
import { SiXiaomi } from "react-icons/si";  // Xiaomi para entrada
import { RiHome4Line, RiHome4Fill } from 'react-icons/ri';
import { IoMdNotifications } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LayoutWithSidebar({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.topIcons}>
          <button className={styles.iconButton} onClick={() => router.push('/projetos/whatsapp')}>
            {/* <FaWhatsapp size={22} /> */}
            <RiHome4Line size={22} />
          </button>
          <button className={styles.iconButton} onClick={() => router.push('/projetos/whatsapp')}>
            <RiHome4Fill size={22} />
          </button>
          <button className={styles.iconButton}>
            <FaChartBar size={22} />
          </button>
          <button className={styles.iconButton}>
            <FaUserFriends size={22} />
          </button>
          <button className={styles.iconButton}>
            <IoMdNotifications size={22} />
          </button>
        </div>

        <div className={styles.bottomIcons}>
          <button className={styles.iconButton}>
            <FaCog size={22} />
          </button>
          <div className={styles.avatarWrapper}>
            <img
              src="https://github.com/juniorxf.png"
              alt="Avatar"
              width={38}
              height={38}
              className={styles.avatar}
            />
          </div>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <div className={styles.mainContent}>
        <header className={styles.header}>Meu Portfólio</header>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
