import { CART_ACTIONS } from '../constants/enums';
import { useCart } from '../contexts/CartContext';
import { Product } from '../types/types';

const { ADD_ITEM_TO_CART } = CART_ACTIONS;

export const useCartAction = () => {
  const { dispatch } = useCart();

  const addToCartOnClick = async ({ product }: { product: Product }) => {
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: {
        product: {
          ...product,
        },
      },
    });
  };

  return {
    addToCartOnClick,
  };
};
