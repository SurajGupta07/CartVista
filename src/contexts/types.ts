import { ReactNode } from 'react';

export interface ProductContextType {
  products: any[] | null;
  setProducts: React.Dispatch<React.SetStateAction<any[] | null>>;
}

export interface ProductProviderProps {
  children: ReactNode;
}
