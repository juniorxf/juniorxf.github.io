import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import FontAwesomeHead from './fontawesome-head'

const inter = Inter({ subsets: ['latin'], display: 'swap' });

// export const dynamic = 'force-dynamic'; // Força o Next a renderizar do lado do cliente

export const metadata: Metadata = {
  title: 'Portfólio José Freitas',
  description: 'Apresentação visual dos projetos pessoais de José Freitas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="pt-br" className={inter.className}>
    <html lang="pt-br">
      {/* <body className={inter.className}> */}
      <body suppressHydrationWarning className={inter.className}>
        {/* <body> */}
        <FontAwesomeHead /> {/* ADICIONA AQUI */}
        {children}
      </body>
    </html>
  );
}

