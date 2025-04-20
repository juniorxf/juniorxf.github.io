// App.tsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Expand from './pages/Expand'
import Home from './pages/Home';
import Sobre from './pages/Sobre'
import Services from './pages/Services'
import Projetos from './pages/Projetos'
import WhatsApp from './pages/WhatsApp'
import Config from './pages/Config'
import './App.css';

function App() {
  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <div className="main">
          <Header />
          <div className="route-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/expand" element={<Expand />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projetos/whatsapp" element={<WhatsApp />} />
              <Route path="/config" element={<Config />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;