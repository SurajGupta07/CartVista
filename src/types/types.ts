import { APPROUTES } from '../constants/enums';

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

export interface Product {
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
