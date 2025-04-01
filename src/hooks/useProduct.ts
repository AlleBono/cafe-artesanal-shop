
import { useState, useEffect } from 'react';
import { Product } from '@/types';
import { products as mockProducts } from '@/data/products';

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Simulating API call with a timeout
        await new Promise(resolve => setTimeout(resolve, 500));
        const found = mockProducts.find(p => p.id === id);
        
        if (found) {
          setProduct(found);
        } else {
          setError('Producto no encontrado');
        }
        
        setIsLoading(false);
      } catch (err) {
        setError('Error al cargar el producto');
        setIsLoading(false);
      }
    };
    
    fetchProduct();
  }, [id]);
  
  return { product, isLoading, error };
};
