import { CART_ACTIONS } from '../constants/enums';
import { useCart } from '../contexts/CartContext';
import { Product } from '../types/types';

const { ADD_ITEM_TO_CART, ADD_TO_WISHLIST, UPDATE_PRODUCT_QUANTITY } =
  CART_ACTIONS;

export const useCartAction = () => {
  const { dispatch } = useCart();

  const addToCartOnClick = ({ product }: { product: Product }) => {
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: {
        product: {
          ...product,
          quantity: 1,
        },
      },
    });
  };

  const addToWishlist = ({ product }: { product: Product }) => {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: {
        product: {
          ...product,
        },
      },
    });
  };

  const updateProductQuantity = ({ product }: { product: Product }) => {
    dispatch({
      type: UPDATE_PRODUCT_QUANTITY,
      payload: { _id: product.id, quantity: product.quantity },
    });
  };

  return {
    addToCartOnClick,
    addToWishlist,
    updateProductQuantity,
  };
};
