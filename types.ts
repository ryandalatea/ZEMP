
export interface Product {
  id: string;
  name: string;
  code: string;
  currentPrice: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviewsCount: number;
}

export interface Review {
  id: number;
  title: string;
  rating: number;
  comment: string;
  author: string;
  date: string;
}

export type ViewState = 'PRODUCT' | 'CHECKOUT';
