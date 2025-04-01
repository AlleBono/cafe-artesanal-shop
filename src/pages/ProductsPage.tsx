
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import ProductFilter, { Filters } from '@/components/products/ProductFilter';
import { useProducts } from '@/hooks/useProducts';
import { Product } from '@/types';

const ProductsPage = () => {
  const { products, isLoading, error } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  // Extract unique values for filters
  const weights = [...new Set(products.map(p => p.weight))];
  const origins = [...new Set(products.map(p => p.origin))];
  const roasts = [...new Set(products.map(p => p.roast))];
  const maxPrice = Math.max(...products.map(p => p.price), 100);
  
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);
  
  const handleFilter = (filters: Filters) => {
    const filtered = products.filter(product => {
      // Search filter
      if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }
      
      // Price filter
      if (product.price < filters.price[0] || product.price > filters.price[1]) {
        return false;
      }
      
      // Weight filter
      if (filters.weights.length > 0 && !filters.weights.includes(product.weight)) {
        return false;
      }
      
      // Origin filter
      if (filters.origins.length > 0 && !filters.origins.includes(product.origin)) {
        return false;
      }
      
      // Roast filter
      if (filters.roasts.length > 0 && !filters.roasts.includes(product.roast)) {
        return false;
      }
      
      return true;
    });
    
    setFilteredProducts(filtered);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Nuestros Cafés</h1>
            <p className="text-muted-foreground">
              Explora nuestra selección de cafés artesanales de la más alta calidad. Todos nuestros cafés son tostados a mano en pequeños lotes para garantizar la frescura y el sabor.
            </p>
          </div>
          
          {isLoading ? (
            <div className="py-16 text-center">Cargando productos...</div>
          ) : error ? (
            <div className="py-16 text-center text-red-500">Error al cargar los productos</div>
          ) : (
            <>
              <ProductFilter 
                onFilter={handleFilter} 
                weights={weights} 
                origins={origins} 
                roasts={roasts}
                maxPrice={maxPrice}
              />
              
              {filteredProducts.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="text-lg mb-4">No se encontraron productos que coincidan con los filtros seleccionados.</p>
                  <p className="text-muted-foreground">Intenta cambiar los filtros o realizar una búsqueda diferente.</p>
                </div>
              ) : (
                <ProductGrid products={filteredProducts} />
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
