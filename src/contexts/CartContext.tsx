import React, {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { cartReducer, initialState } from '../reducers/cart-reducer';
import { Product } from '../types/types';
import { CartContextType } from './types';

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [{ cart, favourites }, dispatch] = useReducer(
    cartReducer,
    initialState,
  );
  const [favouriteList, setFavouriteList] = useState<Product[] | null>([]);
  const [cartPrice, setCartPrice] = useState<number | undefined>(undefined);
  const [orderId, setOrderId] = useState<string | undefined>(undefined);

  const contextValue = useMemo(
    () => ({
      cart,
      favourites,
      favouriteList,
      setFavouriteList,
      dispatch,
      cartPrice,
      setCartPrice,
      orderId,
      setOrderId,
    }),
    [
      cart,
      favourites,
      favouriteList,
      setFavouriteList,
      dispatch,
      cartPrice,
      setCartPrice,
      orderId,
      setOrderId,
    ],
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useProduct must be used within a ProductsProvider');
  }

  return context;
};
