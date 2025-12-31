
import React from 'react';

interface HeaderProps {
  onBack?: () => void;
  showBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onBack, showBack }) => {
  return (
    <header className="bg-[#143c8d] text-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4 h-16 md:h-20">
          <button 
            onClick={showBack ? onBack : undefined}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {showBack ? (
              <i className="fa-solid fa-arrow-left text-xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-xl"></i>
            )}
          </button>
          
          <div className="text-center flex-1">
            <h1 className="text-xl md:text-3xl font-bold tracking-tight">PanVel</h1>
            <p className="text-[10px] md:text-xs uppercase tracking-widest opacity-80">A receita que faz bem</p>
          </div>

          <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
            <i className="fa-solid fa-cart-shopping text-xl"></i>
            <span className="absolute -top-1 -right-1 bg-orange-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
