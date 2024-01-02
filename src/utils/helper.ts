import { Product } from '../types/types';

export const mapProductsToQuantity = (products: Product[]) => {
  return products.map((item: Product) => ({ ...item, quantity: 0 }));
};

export const calculateTotal = (subTotal: number, delivery: number) => {
  if (!delivery || !Number(delivery)) {
    return subTotal;
  }
  return Number(subTotal) + Number(delivery);
};

export const calculateCartSubTotal = (cart: Product[]) => {
  let total = 0;
  cart &&
    cart.forEach(product => {
      const itemPrice = product.quantity * product.price;
      if (isNaN(itemPrice)) {
        throw new Error('Invalid price for an item in the cart');
      }
      total += itemPrice;
    });
  return String(total.toFixed(2));
};
