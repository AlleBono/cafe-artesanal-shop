
import { useState, useEffect } from 'react';
import { Product } from '@/types';
import { products as mockProducts } from '@/data/products';

// Hook para obtener todos los productos
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

// Hook para obtener productos destacados
export const useFeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulating API call with a timeout
        await new Promise(resolve => setTimeout(resolve, 500));
        const featured = mockProducts.filter(product => product.featured);
        setProducts(featured);
        setIsLoading(false);
      } catch (err) {
        setError('Error al cargar los productos destacados');
        setIsLoading(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  return { products, isLoading, error };
};

// Hook para obtener un producto específico
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
