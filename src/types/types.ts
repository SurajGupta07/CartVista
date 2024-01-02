import { APPROUTES, CART_ACTIONS } from '../constants/enums';

export type NavigationParams = {
  [APPROUTES.HOME]: undefined;
  [APPROUTES.CART]: undefined;
  [APPROUTES.DETAILS]: { product: Product };
  [APPROUTES.HOMESTACK]: undefined;
  [APPROUTES.CATEGORIES]: undefined;
  [APPROUTES.FAVOURITE]: undefined;
  [APPROUTES.MORE]: undefined;
};

export type TNavRoutes = {
  Details: { product: Product };
};

export interface Product extends Quantity {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export type Quantity = {
  quantity: number;
};

export type CartAction =
  | {
      type: typeof CART_ACTIONS.ADD_ITEM_TO_CART;
      payload: { product: Product };
    }
  | { type: typeof CART_ACTIONS.REMOVE_FROM_CART; _id: number }
  | { type: typeof CART_ACTIONS.ADD_TO_WISHLIST; payload: { product: Product } }
  | { type: typeof CART_ACTIONS.REMOVE_FROM_WISHLIST; _id: number };
