// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import WhatsApp from './pages/WhatsApp'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import './App.css';

function App() {
  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <div className="main">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/projetos/whatsapp" element={<WhatsApp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;