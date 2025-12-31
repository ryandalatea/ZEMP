
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#143c8d] text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <span className="text-sm font-medium">No Whats</span>
            <div className="bg-green-500 p-1.5 rounded-full flex items-center justify-center">
              <i className="fa-brands fa-whatsapp text-white text-lg"></i>
            </div>
            <span className="text-xl font-bold">(51) 3218 9019</span>
          </div>
          <p className="text-sm opacity-80">SAC e Compras</p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-lg font-semibold mb-4">Baixe o nosso aplicativo</p>
          <div className="flex gap-4 justify-center md:justify-end">
             {/* Mock App Store Icons */}
             <div className="bg-black/20 px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2 cursor-pointer hover:bg-black/30 transition-colors">
                <i className="fa-brands fa-apple text-2xl"></i>
                <div className="text-left">
                  <p className="text-[10px] uppercase">Download on the</p>
                  <p className="text-xs font-bold">App Store</p>
                </div>
             </div>
             <div className="bg-black/20 px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2 cursor-pointer hover:bg-black/30 transition-colors">
                <i className="fa-brands fa-google-play text-xl"></i>
                <div className="text-left">
                  <p className="text-[10px] uppercase">Get it on</p>
                  <p className="text-xs font-bold">Google Play</p>
                </div>
             </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-white/10 text-center text-xs opacity-60">
        © {new Date().getFullYear()} PanVel Farmácias. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
