import { ReactNode } from 'react';
import { CartAction, Product } from '../types/types';

export interface ProductContextType {
  products: Product[] | null;
  setProducts: React.Dispatch<React.SetStateAction<any[] | null>>;
}

export interface ProductProviderProps {
  children: ReactNode;
}

export interface CartContextType {
  cart: Product[];
  favourites: Product[];
  dispatch: React.Dispatch<CartAction>;
}
