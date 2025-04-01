
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { ShoppingCart, Filter, X, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

// Product Card Component
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart({...product, quantity: 1});
    toast({
      title: "Añadido al carrito",
      description: `${product.name} ha sido añadido a tu carrito.`,
      duration: 3000,
    });
  };
  
  return (
    <Card className="product-card-hover overflow-hidden border border-gray-200">
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/products/${product.id}`} className="block">
            <h3 className="font-serif text-lg font-bold hover:text-coffee-medium transition-colors">{product.name}</h3>
          </Link>
          <span className="font-bold text-coffee-medium">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-2">{product.weight}</p>
        <p className="text-sm line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-coffee-dark hover:bg-coffee-medium"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Añadir al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

// Product Grid Component
interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

// Product Filter Component
export interface Filters {
  search: string;
  price: [number, number];
  weights: string[];
  origins: string[];
  roasts: string[];
}

interface ProductFilterProps {
  onFilter: (filters: Filters) => void;
  weights: string[];
  origins: string[];
  roasts: string[];
  maxPrice: number;
}

export const ProductFilter = ({ onFilter, weights, origins, roasts, maxPrice }: ProductFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    search: '',
    price: [0, maxPrice],
    weights: [],
    origins: [],
    roasts: [],
  });

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  const toggleFilter = (array: string[], item: string): string[] => {
    return array.includes(item)
      ? array.filter(i => i !== item)
      : [...array, item];
  };

  const handleClearFilters = () => {
    const resetFilters = {
      search: '',
      price: [0, maxPrice] as [number, number],
      weights: [],
      origins: [],
      roasts: [],
    };
    setFilters(resetFilters);
    onFilter(resetFilters);
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="w-full md:w-1/2">
          <Input
            type="search"
            placeholder="Buscar productos..."
            value={filters.search}
            onChange={(e) => handleFilterChange({ search: e.target.value })}
            className="w-full"
          />
        </div>
        
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          className="flex items-center"
        >
          <Filter className="mr-2 h-4 w-4" />
          Filtros
        </Button>
      </div>
      
      {isOpen && (
        <div className="mt-4 p-6 border rounded-lg bg-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-lg">Filtros</h3>
            <Button variant="ghost" size="sm" onClick={handleClearFilters}>
              <X className="mr-2 h-4 w-4" />
              Limpiar
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <Label className="mb-2 block">Precio</Label>
              <div className="px-2">
                <Slider
                  defaultValue={[0, maxPrice]}
                  max={maxPrice}
                  step={1}
                  value={filters.price}
                  onValueChange={(value) => handleFilterChange({ price: value as [number, number] })}
                  className="my-4"
                />
                <div className="flex justify-between text-sm">
                  <span>${filters.price[0]}</span>
                  <span>${filters.price[1]}</span>
                </div>
              </div>
            </div>
            
            <div>
              <Label className="mb-2 block">Peso</Label>
              <div className="space-y-2">
                {weights.map((weight) => (
                  <div key={weight} className="flex items-center space-x-2">
                    <Checkbox
                      id={`weight-${weight}`}
                      checked={filters.weights.includes(weight)}
                      onCheckedChange={() => 
                        handleFilterChange({ weights: toggleFilter(filters.weights, weight) })
                      }
                    />
                    <label
                      htmlFor={`weight-${weight}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {weight}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Label className="mb-2 block">Origen</Label>
              <div className="space-y-2">
                {origins.map((origin) => (
                  <div key={origin} className="flex items-center space-x-2">
                    <Checkbox
                      id={`origin-${origin}`}
                      checked={filters.origins.includes(origin)}
                      onCheckedChange={() => 
                        handleFilterChange({ origins: toggleFilter(filters.origins, origin) })
                      }
                    />
                    <label
                      htmlFor={`origin-${origin}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {origin}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Label className="mb-2 block">Tostado</Label>
              <div className="space-y-2">
                {roasts.map((roast) => (
                  <div key={roast} className="flex items-center space-x-2">
                    <Checkbox
                      id={`roast-${roast}`}
                      checked={filters.roasts.includes(roast)}
                      onCheckedChange={() => 
                        handleFilterChange({ roasts: toggleFilter(filters.roasts, roast) })
                      }
                    />
                    <label
                      htmlFor={`roast-${roast}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {roast}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
