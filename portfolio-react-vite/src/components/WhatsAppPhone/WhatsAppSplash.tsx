// src/components/WhatsAppPhone/WhatsAppSplash.tsx

import StatusBar from '../PhoneFrame/StatusBar';
// import NavigationBar from '../PhoneFrame/NavigationBar';
// import { SiMeta } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { BsThreeDots } from "react-icons/bs";
import './WhatsAppSplash.css';

// interface WhatsAppSplashProps {
//   onBack?: () => void;
// }

// export default function WhatsAppSplash({ onBack }: WhatsAppSplashProps) {
export default function WhatsAppSplash() {
  return (
    <div className="whatsappSplash">
      {/* <StatusBar theme="dark" /> */}
      <StatusBar
        theme="dark"
        leftSlot={
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <i className="fas fa-location-arrow" />
            {/* <i className="fas fa-bluetooth-b" /> */}
            <BsThreeDots />
          </div>
        }
        className="splashStatusBar"
      />
      <div className="splashContent">
        {/* <img src="/whatsapp.svg" alt="WhatsApp" className="whatsappIcon" /> */}
        <SiWhatsapp className="whatsappIcon" />
        <p className="fromMeta">from <br /><img src="/meta.svg" alt="Meta" /></p>
      </div>
      {/* <NavigationBar theme="light" onBack={onBack} /> */}
    </div>
  );
}
