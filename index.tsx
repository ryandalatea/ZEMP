
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// --- TYPES ---
interface Product {
  id: string;
  name: string;
  code: string;
  currentPrice: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviewsCount: number;
}

interface Review {
  id: number;
  title: string;
  rating: number;
  comment: string;
  author: string;
  date: string;
}

type ViewState = 'PRODUCT' | 'CHECKOUT';

// --- CONSTANTS ---
const MAIN_PRODUCT: Product = {
  id: 'ozempic-1mg',
  name: 'Ozempic 1mg Semaglutida 3ml 1 Caneta Injetável + 4 Agulhas Geladeira',
  code: '116907',
  currentPrice: 67.00,
  originalPrice: 998.98,
  image: 'https://cdn1.staticpanvel.com.br/produtos/15/116907-15.jpg?ims=800x', 
  rating: 5,
  reviewsCount: 11675,
};

const REVIEWS: Review[] = [
  { id: 1, title: 'Ozempic', rating: 5, comment: 'Excelente para a saúde', author: 'Vanessa', date: '31/08/2024' },
  { id: 2, title: '25 kg eliminados em 6 meses', rating: 5, comment: 'Junto com acompanhamento médico, o único que não tem efeitos colaterais extremos, só alguns enjoos.', author: 'Viviane', date: '05/06/2024' },
  { id: 3, title: 'Eliminei 22Kg em 2 mês', rating: 5, comment: 'Eliminei 22kg com uso do ozempic, tomo dose mínima 19 cliques por semana, sem enjoos, sem fome, controlou minha ansiedade, ainda preciso eliminar 20kg', author: 'Rosana', date: '03/04/2024' }
];

const BRAZILIAN_STATES = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

// --- COMPONENTS ---

const Header = ({ onBack, showBack }) => (
  <header className="bg-[#143c8d] text-white fixed top-0 left-0 right-0 z-50 shadow-md">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between py-4 h-16 md:h-20">
        <button onClick={showBack ? onBack : undefined} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          {showBack ? <i className="fa-solid fa-arrow-left text-xl"></i> : <i className="fa-solid fa-bars text-xl"></i>}
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

const Footer = () => (
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
          <div className="bg-black/20 px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2 cursor-pointer">
            <i className="fa-brands fa-apple text-2xl"></i>
            <div className="text-left">
              <p className="text-[10px] uppercase">App Store</p>
            </div>
          </div>
          <div className="bg-black/20 px-4 py-2 rounded-lg border border-white/20 flex items-center gap-2 cursor-pointer">
            <i className="fa-brands fa-google-play text-xl"></i>
            <div className="text-left">
              <p className="text-[10px] uppercase">Google Play</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const PrescriptionForm = () => {
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const handleCpf = (e) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length <= 11) v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    setCpf(v);
  };
  return (
    <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 flex flex-col gap-3">
      <input type="text" placeholder="CPF" value={cpf} onChange={handleCpf} className="w-full p-3 border rounded-lg" required />
      <input type="text" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} className="w-full p-3 border rounded-lg" required />
      <div className="grid grid-cols-3 gap-3">
        <input type="text" placeholder="Nº" className="col-span-1 p-3 border rounded-lg" required />
        <select className="col-span-2 p-3 border rounded-lg" required>
          <option value="">UF</option>
          {BRAZILIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
    </div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(6 * 60 * 60);
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);
  const h = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
  const m = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
  const s = (timeLeft % 60).toString().padStart(2, '0');
  return (
    <div className="bg-gradient-to-br from-red-700 to-orange-600 rounded-3xl p-5 text-white text-center mb-4 animate-pulse-subtle">
      <p className="text-[10px] font-black uppercase tracking-widest mb-2">🔥 Queima de Estoque</p>
      <div className="flex justify-center gap-4 text-3xl font-black">
        <div>{h}<p className="text-[8px] uppercase">Horas</p></div>:
        <div>{m}<p className="text-[8px] uppercase">Minutos</p></div>:
        <div>{s}<p className="text-[8px] uppercase">Segundos</p></div>
      </div>
    </div>
  );
};

// --- MAIN APP ---

const App = () => {
  const [view, setView] = useState('PRODUCT');
  const formatPrice = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <Header onBack={() => setView('PRODUCT')} showBack={view === 'CHECKOUT'} />
      <main className="flex-grow pt-24 px-4 max-w-7xl mx-auto w-full">
        {view === 'PRODUCT' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-white rounded-2xl p-8 flex justify-center">
                <img src={MAIN_PRODUCT.image} className="max-w-xs w-full h-auto" />
              </div>
              <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 p-4 text-sm italic">
                A partir de 22/07 o Ozempic só com receita, mas até lá tá saindo de R$ 998,98 por <span className="font-bold text-blue-700">{formatPrice(MAIN_PRODUCT.currentPrice)}</span>.
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl font-extrabold">{MAIN_PRODUCT.name}</h1>
              <CountdownTimer />
              <div className="bg-white border border-orange-100 rounded-3xl p-6 text-center shadow-sm">
                <span className="bg-green-500 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase mb-4 inline-block">Desconto Aplicado</span>
                <div className="text-6xl font-black text-orange-600">{formatPrice(MAIN_PRODUCT.currentPrice)}</div>
                <div className="text-xl text-gray-400 line-through">{formatPrice(MAIN_PRODUCT.originalPrice)}</div>
              </div>
              <PrescriptionForm />
              <button onClick={() => setView('CHECKOUT')} className="w-full bg-[#143c8d] text-white py-5 rounded-2xl text-lg font-black shadow-xl">
                COMPRAR AGORA
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-xl mx-auto text-center py-10">
            <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
               <h2 className="text-2xl font-bold">Resumo do Pedido</h2>
               <div className="text-4xl font-black text-orange-600">{formatPrice(MAIN_PRODUCT.currentPrice)}</div>
               <PrescriptionForm />
               <button className="w-full bg-gray-300 text-gray-500 py-4 rounded-xl font-bold cursor-not-allowed" disabled>VALIDAR LABORATÓRIO</button>
               <button className="w-full bg-[#143c8d] text-white py-4 rounded-xl font-bold">ADICIONAR À CESTA</button>
            </div>
            <button onClick={() => setView('PRODUCT')} className="mt-6 text-gray-400 font-bold text-xs uppercase">Voltar</button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
