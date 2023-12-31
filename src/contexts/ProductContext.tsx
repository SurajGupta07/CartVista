import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { EReqMethod } from '../constants/enums';
import { HttpService } from '../services/http.service';
import { Product } from '../types/types';
import { END_POINTS } from '../utils/endpoints';
import { mapProductsToQuantity } from '../utils/helper';
import { ProductContextType, ProductProviderProps } from './types';

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined,
);

export const ProductsProvider = ({
  children,
}: Readonly<ProductProviderProps>): JSX.Element => {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await HttpService({
          method: EReqMethod.GET,
          url: END_POINTS.products,
        });
        const mapProducts = mapProductsToQuantity(response.products);
        setProducts(mapProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  const contextValue = useMemo(
    () => ({ products, setProducts }),
    [products, setProducts],
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProduct must be used within a ProductsProvider');
  }

  return context;
};
