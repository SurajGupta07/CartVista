import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { cartReducer, initialState } from '../reducers/cart-reducer';
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

  const contextValue = useMemo(
    () => ({
      cart,
      favourites,

      dispatch,
    }),
    [cart, favourites, dispatch],
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
