// src/components/WhatsAppPhone/WhatsAppSplash.tsx

import StatusBar from '../PhoneFrame/StatusBar';
import NavigationBar from '../PhoneFrame/NavigationBar';
import './WhatsAppSplash.css';

interface WhatsAppSplashProps {
  onBack?: () => void;
}

export default function WhatsAppSplash({ onBack }: WhatsAppSplashProps) {
  return (
    <div className="whatsappSplash">
      <StatusBar theme="dark" />
      <div className="splashContent">
        <img src="/whatsapp.svg" alt="WhatsApp" className="whatsappIcon" />
        <p className="fromMeta">from <span>Meta</span></p>
      </div>
      <NavigationBar theme="light" onBack={onBack} />
    </div>
  );
}
