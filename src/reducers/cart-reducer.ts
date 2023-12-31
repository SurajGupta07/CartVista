import { CART_ACTIONS } from '../constants/enums';
import { CartAction, Product } from '../types/types';

export interface CartState {
  cart: Product[];
  favourites: Product[];
}

export const initialState: CartState = {
  cart: [],
  favourites: [],
};

export const cartReducer = (
  state: typeof initialState,
  action: CartAction,
): typeof initialState => {
  const { cart, favourites } = state;
  const {
    ADD_ITEM_TO_CART,
    REMOVE_FROM_CART,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
  } = CART_ACTIONS;
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: cart.concat(action.payload.product),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: cart.filter(product => product.id !== action._id),
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        favourites: favourites.concat(action.payload.product),
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        favourites: favourites.filter(product => product.id !== action._id),
      };
    default:
      return state;
  }
};
