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
  favouriteList: Product[] | null;
  setFavouriteList: React.Dispatch<React.SetStateAction<Product[] | null>>;
  dispatch: React.Dispatch<CartAction>;
  cartPrice: number | undefined;
  setCartPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  orderId: string | undefined;
  setOrderId: React.Dispatch<React.SetStateAction<string | undefined>>;
}
