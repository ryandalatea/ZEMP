
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PrescriptionForm from './components/PrescriptionForm';
import Reviews from './components/Reviews';
import CountdownTimer from './components/CountdownTimer';
import { MAIN_PRODUCT } from './constants';
import { ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('PRODUCT');
  const [imageZoom, setImageZoom] = useState(false);

  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const formatNumber = (value: number) => {
    return value.toLocaleString('pt-BR');
  };

  const toggleView = () => {
    setView(prev => prev === 'PRODUCT' ? 'CHECKOUT' : 'PRODUCT');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <Header onBack={toggleView} showBack={view === 'CHECKOUT'} />

      <main className="flex-grow pt-20 md:pt-28 px-4 max-w-7xl mx-auto w-full">
        {view === 'PRODUCT' ? (
          <div className="animate-in fade-in duration-500">
            {/* Breadcrumb */}
            <nav className="text-[10px] md:text-xs text-gray-400 flex items-center gap-2 mb-6 overflow-x-auto whitespace-nowrap">
              <span className="hover:text-blue-600 cursor-pointer">Página Inicial</span>
              <span>></span>
              <span className="hover:text-blue-600 cursor-pointer">Medicamentos Especiais</span>
              <span>></span>
              <span className="font-semibold text-blue-700">Endocrinologia</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Product Image and Urgency Message */}
              <div className="space-y-6">
                <div 
                  className="flex items-center justify-center relative overflow-hidden group min-h-[350px] md:min-h-[500px] bg-white rounded-2xl"
                  onMouseEnter={() => setImageZoom(true)}
                  onMouseLeave={() => setImageZoom(false)}
                >
                  <img 
                    src={MAIN_PRODUCT.image} 
                    alt={MAIN_PRODUCT.name} 
                    className={`max-w-xs md:max-w-md w-full h-auto object-contain transition-transform duration-700 ${imageZoom ? 'scale-110' : 'scale-100'}`}
                    loading="eager"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/70 p-2 rounded-full shadow-sm md:hidden">
                    <i className="fa-solid fa-expand text-gray-600"></i>
                  </div>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 text-xs md:text-sm text-blue-900 italic leading-relaxed rounded-r-lg">
                  A partir de 22/07 o Ozempic só com receita, mas até lá tá saindo de {formatPrice(MAIN_PRODUCT.originalPrice)} por <span className="font-bold text-blue-700">{formatPrice(MAIN_PRODUCT.currentPrice)}</span>. Última chance antes da ANVISA exigir receitas.
                </div>
              </div>

              {/* Product Info and Purchase Section */}
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-3">
                    {MAIN_PRODUCT.name}
                  </h1>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] md:text-xs text-gray-400 font-bold tracking-wider uppercase">COD {MAIN_PRODUCT.code}</span>
                    <div className="flex items-center gap-1.5 border-l border-gray-200 pl-4">
                      <div className="text-yellow-400 flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i key={i} className="fa-solid fa-star text-xs"></i>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 font-bold">({formatNumber(MAIN_PRODUCT.reviewsCount)})</span>
                    </div>
                  </div>
                </div>

                {/* Countdown Timer Integration */}
                <CountdownTimer />

                <div className="bg-white border border-orange-100 rounded-3xl p-6 text-center shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 right-0 bg-orange-600 text-white text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                     Oferta
                   </div>
                   <div className="mt-2 mb-4">
                     <span className="inline-flex items-center gap-2 bg-green-500 text-white text-[11px] md:text-xs px-4 py-1.5 rounded-full font-black uppercase tracking-widest shadow-[0_4px_10px_rgba(34,197,94,0.3)] animate-bounce-subtle">
                       <i className="fa-solid fa-circle-check"></i>
                       DESCONTO APLICADO
                     </span>
                   </div>
                   <div className="flex flex-col items-center">
                     <div className="text-6xl font-black text-orange-600 tracking-tighter">{formatPrice(MAIN_PRODUCT.currentPrice)}</div>
                     <div className="text-lg text-gray-400 line-through font-medium opacity-60">{formatPrice(MAIN_PRODUCT.originalPrice)}</div>
                     <p className="mt-4 text-[10px] md:text-xs text-gray-400 font-bold flex items-center gap-1">
                        <i className="fa-solid fa-circle-exclamation text-blue-500"></i>
                        Limite de 10 unidades por CPF/Mês.
                     </p>
                   </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-bold text-gray-600 uppercase tracking-widest ml-1">Dados para Validação:</p>
                  <PrescriptionForm />
                </div>

                <button 
                  onClick={toggleView}
                  className="w-full bg-[#143c8d] hover:bg-[#0b2a63] text-white py-5 rounded-2xl text-lg font-black shadow-xl transition-all transform active:scale-[0.97] flex items-center justify-center gap-3"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  COMPRAR AGORA
                </button>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                  <h3 className="text-gray-900 font-black text-sm mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-shield-check text-blue-600"></i>
                    GARANTIA PANVEL
                  </h3>
                  <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed font-medium">
                    Produto 100% original. Devido às novas regras da ANVISA, estamos liquidando o estoque sem exigência de receita com retenção até o dia 22/07. Aproveite o desconto direto de fábrica.
                  </p>
                </div>
              </div>
            </div>

            {/* Description and Info */}
            <div className="mt-16 space-y-12">
               <section>
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-blue-600 inline-block">Descrição do produto</h2>
                  <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base leading-relaxed text-gray-700">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">O que é o Ozempic?</h3>
                      <p>
                        O <strong>Ozempic 1mg</strong> é uma solução injetável que contém semaglutida, um agonista do receptor de GLP-1. Ele é indicado para adultos com <strong>diabetes tipo 2</strong> que não conseguem controlar adequadamente os níveis de açúcar no sangue apenas com dieta e exercícios. Seu uso pode ser feito isoladamente ou combinado com outros medicamentos antidiabéticos.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Composição</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold">•</span>
                          <span>Princípio ativo: <strong>semaglutida</strong> 1,34 mg/mL.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold">•</span>
                          <span>Excipientes: fosfato de sódio dibásico di-hidratado, propilenoglicol, fenol, ácido clorídrico (ajuste de pH), hidróxido de sódio (ajuste de pH) e água para injetáveis.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
               </section>

               <Reviews />
            </div>
          </div>
        ) : (
          /* Checkout View */
          <div className="max-w-xl mx-auto animate-in slide-in-from-right duration-500 pb-20">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-blue-50 px-8 py-10 text-center border-b border-gray-100">
                <span className="inline-flex items-center gap-2 bg-green-500 text-white text-[11px] px-4 py-1.5 rounded-full font-black uppercase tracking-widest shadow-[0_4px_10px_rgba(34,197,94,0.3)] mb-4">
                  <i className="fa-solid fa-circle-check"></i>
                  DESCONTO APLICADO
                </span>
                <div className="text-5xl font-black text-orange-600 mb-1">{formatPrice(MAIN_PRODUCT.currentPrice)}</div>
                <div className="text-xl text-gray-400 line-through font-medium mb-4">{formatPrice(MAIN_PRODUCT.originalPrice)}</div>
                <p className="text-xs text-blue-800 font-bold bg-blue-100 py-2 rounded-full max-w-xs mx-auto">
                  Limite de 4 caixas por mês com desconto.
                </p>
              </div>

              <div className="p-8 space-y-6">
                <PrescriptionForm />
                
                <button 
                  disabled
                  className="w-full bg-gray-300 text-gray-500 py-4 rounded-xl text-base font-bold cursor-not-allowed"
                >
                  VALIDAR DESCONTO LABORATÓRIO
                </button>

                <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl flex gap-4">
                  <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fa-solid fa-info text-white text-xs"></i>
                  </div>
                  <div className="text-xs md:text-sm leading-relaxed">
                    <p className="font-extrabold text-blue-900 mb-1">Este benefício é oferecido pelo programa NOVO DIA - NOVO NORDISK</p>
                    <p className="text-blue-700 font-medium">e ativado conforme as suas regras e o CPF informado.</p>
                  </div>
                </div>

                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-100"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-4 text-gray-300 font-bold tracking-widest">Ou preço normal</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{formatPrice(MAIN_PRODUCT.originalPrice)}</div>
                  <div className="text-sm text-gray-500 font-medium">ou 5x de {formatPrice(MAIN_PRODUCT.originalPrice / 5)} sem juros</div>
                </div>

                <button 
                  className="w-full bg-[#143c8d] hover:bg-[#0b2a63] text-white py-4 rounded-xl text-lg font-bold shadow-md transition-all active:scale-[0.98]"
                >
                  ADICIONAR À CESTA
                </button>

                <p className="text-center text-[10px] md:text-xs text-gray-400 font-medium">
                  Este produto é vendido e entregue pela <strong className="text-blue-600">PanVel</strong>.
                </p>
              </div>
            </div>

            <button 
              onClick={toggleView}
              className="mt-8 mx-auto flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest hover:text-blue-600 transition-colors"
            >
              <i className="fa-solid fa-chevron-left"></i>
              Voltar para o Produto
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
