// src/pages/Projetos.tsx
import { Link } from 'react-router-dom';

export default function Projetos() {
  return (
    <div>
      <h2>Projetos</h2>
      <ul>
        <li>
          <Link to="/projetos/whatsapp">Simulador de WhatsApp</Link> – Interface mobile interativa para mensagens, com login e envio de textos.
        </li>
        <li>
          <a href="https://github.com/juniorxf" target="_blank" rel="noopener noreferrer">
            CRM Integrado com WhatsApp
          </a> – Sistema completo de gestão de clientes com mensagens automatizadas.
        </li>
        <li>
          <a href="https://juniorxf.github.io" target="_blank" rel="noopener noreferrer">
            Portfólio Pessoal
          </a> – Este site, desenvolvido com React e Vite, hospedado no GitHub Pages.
        </li>
      </ul>
    </div>
  );
}
