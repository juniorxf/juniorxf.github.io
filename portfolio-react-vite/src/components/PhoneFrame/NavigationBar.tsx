// src/components/PhoneFrame/NavigationBar.tsx

import './NavigationBar.css';

interface NavigationBarProps {
  onBack?: () => void;
  theme?: 'light' | 'dark';
  className?: string; // novo
}

export default function NavigationBar({ onBack, theme = 'light', className = '' }: NavigationBarProps) {
  return (
    <div className={`navigationBar ${theme} ${className}`}>
      <div className="navButton" onClick={onBack}>
        <i className="fas fa-square"></i>
      </div>
      <div className="navButton" onClick={onBack}>
        <img src="/circle.svg" className="navIcon" alt="Home" />
      </div>
      <div className="navButton" onClick={onBack}>
        <i className="fas fa-caret-left"></i>
      </div>
    </div>
  );
}

