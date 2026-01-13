
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, X } from 'lucide-react';

interface ProductFilterProps {
  onFilter: (filters: Filters) => void;
  weights: string[];
  origins: string[];
  roasts: string[];
  maxPrice: number;
}

export interface Filters {
  search: string;
  price: [number, number];
  weights: string[];
  origins: string[];
  roasts: string[];
}

const ProductFilter = ({ onFilter, weights, origins, roasts, maxPrice }: ProductFilterProps) => {
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
    const resetFilters: Filters = {
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

export default ProductFilter;
