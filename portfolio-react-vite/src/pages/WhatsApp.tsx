// import { useState } from 'react';
// import LoginPhone from '../components/WhatsAppPhone/LoginPhone';
// import WhatsAppPhone from '../components/WhatsAppPhone/WhatsAppPhone';

// export default function WhatsApp() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   if (!isAuthenticated) {
//     return <LoginPhone onSuccess={() => setIsAuthenticated(true)} />;
//   }

//   return <WhatsAppPhone />;
// }

import { useState } from 'react';
import LayoutWithSidebar from '../layouts/LayoutWithSidebar';
import LoginPhone from '../components/WhatsAppPhone/LoginPhone';
import WhatsAppPhone from '../components/WhatsAppPhone/WhatsAppPhone';

export default function WhatsApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <LayoutWithSidebar>
      {!isAuthenticated ? (
        <LoginPhone onSuccess={() => setIsAuthenticated(true)} />
      ) : (
        <WhatsAppPhone />
      )}
    </LayoutWithSidebar>
  );
}
