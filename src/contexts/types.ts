import { ReactNode } from 'react';
import { Product } from '../types/types';

export interface ProductContextType {
  products: Product[] | null;
  setProducts: React.Dispatch<React.SetStateAction<any[] | null>>;
}

export interface ProductProviderProps {
  children: ReactNode;
}
