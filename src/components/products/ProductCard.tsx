
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product);
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

export default ProductCard;
