// src/components/PhoneFrame/PhoneContainer.tsx

import './PhoneContainer.css';

interface PhoneContainerProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
}

export default function PhoneContainer({ children, theme = 'light' }: PhoneContainerProps) {
  return (
    <div className="screen-wrapper">
      <div className="phone-wrapper">
        <div className="phone-content">
          {children}
        </div>
        <div className={`phoneContainer ${theme}`} />
      </div>
    </div>
  );
}