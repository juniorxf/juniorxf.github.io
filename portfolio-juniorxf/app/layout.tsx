// import '@/styles/globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import FontAwesomeHead from './fontawesome-head'

// const inter = Inter({ subsets: ['latin'], display: 'swap' });

// // export const dynamic = 'force-dynamic'; // Força o Next a renderizar do lado do cliente

// export const metadata: Metadata = {
//   title: 'Portfólio José Freitas',
//   description: 'Apresentação visual dos projetos pessoais de José Freitas',
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     // <html lang="pt-br" className={inter.className}>
//     <html lang="pt-br">
//       {/* <body className={inter.className}> */}
//       <body suppressHydrationWarning className={inter.className}>
//         {/* <body> */}
//         <FontAwesomeHead /> {/* ADICIONA AQUI */}
//         {children}
//       </body>
//     </html>
//   );
// }


// app/layout.tsx
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import FontAwesomeHead from './fontawesome-head';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Portfólio José Freitas',
  description: 'Apresentação visual dos projetos pessoais de José Freitas',
};

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="pt-br" className={inter.className}>
//       <head>
//         <FontAwesomeHead />
//       </head>
//       <body suppressHydrationWarning>
//         {children}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={inter.className}>
      <head>
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-yRLhKuDovnh1cZGrqX7Vb7F7vUk/xf30Ml0WeEOL4R2dcCLo7B5rOViXKyKJeb8u3oHwDQguNYhQj2JWzqY3RQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

