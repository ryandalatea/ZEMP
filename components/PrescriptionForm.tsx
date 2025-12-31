
import React, { useState } from 'react';
import { BRAZILIAN_STATES } from '../constants';

const PrescriptionForm: React.FC = () => {
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    setCpf(value);
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 8) {
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
    }
    setCep(value);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 flex flex-col gap-3">
      <input 
        type="text" 
        placeholder="CPF" 
        value={cpf}
        onChange={handleCpfChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white transition-all"
        required 
      />
      <input 
        type="text" 
        placeholder="CEP" 
        value={cep}
        onChange={handleCepChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white transition-all"
        required 
      />
      <div className="grid grid-cols-3 gap-3">
        <input 
          type="text" 
          placeholder="Nº" 
          className="col-span-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white transition-all"
          required 
        />
        <select 
          className="col-span-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white transition-all"
          required
        >
          <option value="">UF</option>
          {BRAZILIAN_STATES.map(state => (
            <option key={state} value={state.toLowerCase()}>{state}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PrescriptionForm;
