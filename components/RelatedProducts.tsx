
import React from 'react';
import { RELATED_PRODUCTS } from '../constants.tsx';

const RelatedProducts: React.FC = () => {
  return (
    <section className="mt-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">🏷️</span>
        <h2 className="text-xl font-bold">Produtos Para comprar junto ao Ozempic</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {RELATED_PRODUCTS.map((product) => (
          <div key={product.id} className="group border border-gray-100 rounded-xl p-4 flex gap-4 hover:shadow-md transition-shadow bg-gray-50/50">
            <div className="relative w-24 h-24 flex-shrink-0 bg-white rounded-lg p-2">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
              {'discount' in product && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                  {product.discount}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-between flex-1 py-1">
              <h3 className="text-xs font-semibold text-gray-700 leading-snug group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
              <button className="mt-2 flex items-center justify-center gap-2 w-full py-1.5 border border-gray-300 rounded-md hover:bg-white hover:border-blue-500 hover:text-blue-600 transition-all text-xs font-medium">
                <i className="fa-solid fa-cart-plus"></i>
                Adicionar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
