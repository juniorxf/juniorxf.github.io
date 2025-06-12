// // src/pages/Sobre.tsx

// export default function Sobre() {
//   return (
//     <div>
//       <h2>Sobre mim</h2>
//       <p>Me chamo José Freitas e atuo como desenvolvedor full stack, com foco em soluções integradas para web, automação e comunicação digital.</p>
//       <p>Tenho experiência em Node.js, React, PostgreSQL, API REST, mensagens automatizadas via WhatsApp, integrações com Baileys, CRMs personalizados e implantação em servidores VPS com Nginx.</p>
//       <p>Gosto de transformar ideias em sistemas reais, funcionais e prontos para uso em produção.</p>
//     </div>
//   );
// }

// src/pages/Sobre.tsx

import './Sobre.css';

export default function Sobre() {
  return (
    <div className="sobre-container">
      <div className="perfil">
        <img
          src="https://github.com/juniorxf.png"
          alt="Foto de José Freitas"
          className="foto-perfil"
        />
        <div className="info-pessoal">
          <h2>José Freitas</h2>
          <p>Desenvolvedor Full Stack</p>
          <p>Itaguara, MG</p>
        </div>
      </div>

      <div className="descricao">
        <p>
          Sou desenvolvedor full stack com foco em soluções integradas para web, automação e comunicação digital.
        </p>
        <p>
          Tenho experiência em Node.js, React, PostgreSQL, API REST, mensagens automatizadas via WhatsApp, integrações com Baileys, CRMs personalizados e implantação em servidores VPS com Nginx.
        </p>
        <p>
          Gosto de transformar ideias em sistemas reais, funcionais e prontos para uso em produção.
        </p>
      </div>

      <div className="qualificacoes">
        <h3>Minhas Qualificações</h3>
        <ul>
          <li>✔️ Desenvolvimento de APIs REST com Node.js e Express</li>
          <li>✔️ Integração de mensagens via WhatsApp utilizando Baileys</li>
          <li>✔️ Front-end moderno com React e TypeScript</li>
          <li>✔️ Banco de dados PostgreSQL com Sequelize</li>
          <li>✔️ Implantação em servidores VPS com Nginx</li>
          <li>✔️ Desenvolvimento de CRMs personalizados</li>
        </ul>
      </div>
    </div>
  );
}
