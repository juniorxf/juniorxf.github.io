'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      gap: '20px',
      // backgroundColor: '#f0f2f5'
    }}>
      <h1>Bem-vindo ao portfólio de José Freitas</h1>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Link href="/projetos/whatsapp">📱 Projeto WhatsApp2</Link>
        <Link href="/projetos">📁 Ver todos os projetos</Link>
        <Link href="/sobre">👨‍💻 Sobre mim</Link>
      </nav>
    </main>
  );
}