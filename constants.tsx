
import React from 'react';
import { Product, Review } from './types.ts';

export const MAIN_PRODUCT: Product = {
  id: 'ozempic-1mg',
  name: 'Ozempic 1mg Semaglutida 3ml 1 Caneta Injetável + 4 Agulhas Geladeira',
  code: '116907',
  currentPrice: 67.00,
  originalPrice: 998.98,
  image: 'https://cdn1.staticpanvel.com.br/produtos/15/116907-15.jpg?ims=800x', 
  rating: 5,
  reviewsCount: 11675,
};

export const REVIEWS: Review[] = [
  {
    id: 1,
    title: 'Ozempic',
    rating: 5,
    comment: 'Excelente para a saúde',
    author: 'Vanessa',
    date: '31/08/2024'
  },
  {
    id: 2,
    title: '25 kg eliminados em 6 meses',
    rating: 5,
    comment: 'Junto com acompanhamento médico, o único que não tem efeitos colaterais extremos, só alguns enjoos.',
    author: 'Viviane',
    date: '05/06/2024'
  },
  {
    id: 3,
    title: 'Eliminei 22Kg em 2 mês',
    rating: 5,
    comment: 'Eliminei 22kg com uso do ozempic, tomo dose mínima 19 cliques por semana, sem enjoos, sem fome, controlou minha ansiedade, ainda preciso eliminar 20kg',
    author: 'Rosana',
    date: '03/04/2024'
  }
];

export const RELATED_PRODUCTS = [
  {
    id: 'desodalina',
    name: 'Desodalina Suplemento Emagrecedor 600mg 60 Capsulas',
    image: 'https://cdn1.staticpanvel.com.br/produtos/15/110945-15.jpg?ims=424x',
  },
  {
    id: 'ibuprofeno',
    name: 'Ibuprofeno 600mg 20 Comprimidos Prati Donaduzzi',
    image: 'https://cdn1.staticpanvel.com.br/produtos/15/102215-15.jpg?ims=424x',
    discount: '58%'
  }
];

export const BRAZILIAN_STATES = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];
