
import { useState, useEffect } from 'react';
import { Product } from '@/types';
import { products as mockProducts } from '@/data/products';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulating API call with a timeout
        await new Promise(resolve => setTimeout(resolve, 800));
        setProducts(mockProducts);
        setIsLoading(false);
      } catch (err) {
        setError('Error al cargar los productos');
        setIsLoading(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  return { products, isLoading, error };
};
