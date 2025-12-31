
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const INITIAL_TIME = 6 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return {
      h: h.toString().padStart(2, '0'),
      m: m.toString().padStart(2, '0'),
      s: s.toString().padStart(2, '0')
    };
  };

  const { h, m, s } = formatTime(timeLeft);
  const progress = (timeLeft / INITIAL_TIME) * 100;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-orange-600 rounded-3xl p-5 shadow-2xl border border-white/20 animate-pulse-subtle group mb-4">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 flex items-center gap-2">
            <i className="fa-solid fa-fire text-orange-300 animate-bounce"></i>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-white">Queima de Estoque</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="bg-black/30 backdrop-blur-lg w-14 h-16 rounded-xl flex items-center justify-center shadow-inner border border-white/10 relative overflow-hidden">
              <span className="text-3xl font-black text-white tabular-nums tracking-tighter drop-shadow-md">{h}</span>
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10"></div>
            </div>
            <span className="text-[9px] uppercase font-black text-white/80 mt-2 tracking-tighter">Horas</span>
          </div>

          <div className="text-2xl font-black text-white/50 mb-6">:</div>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="bg-black/30 backdrop-blur-lg w-14 h-16 rounded-xl flex items-center justify-center shadow-inner border border-white/10 relative overflow-hidden">
              <span className="text-3xl font-black text-white tabular-nums tracking-tighter drop-shadow-md">{m}</span>
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10"></div>
            </div>
            <span className="text-[9px] uppercase font-black text-white/80 mt-2 tracking-tighter">Minutos</span>
          </div>

          <div className="text-2xl font-black text-white/50 mb-6">:</div>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="bg-black/30 backdrop-blur-lg w-14 h-16 rounded-xl flex items-center justify-center shadow-inner border border-white/10 relative overflow-hidden">
              <span className="text-3xl font-black text-white tabular-nums tracking-tighter drop-shadow-md">{s}</span>
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10"></div>
            </div>
            <span className="text-[9px] uppercase font-black text-white/80 mt-2 tracking-tighter">Segundos</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5 px-4">
          <div className="h-1.5 w-full bg-black/20 rounded-full overflow-hidden border border-white/10 p-[1px]">
            <div 
              className="h-full bg-gradient-to-r from-orange-300 to-white rounded-full transition-all duration-1000 ease-linear shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center mt-2 px-1">
            <p className="text-[9px] font-bold text-white/70 italic">Últimas unidades em estoque</p>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_5px_#4ade80]"></div>
              <span className="text-[9px] font-black text-white/90 uppercase">Oferta Ativa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
