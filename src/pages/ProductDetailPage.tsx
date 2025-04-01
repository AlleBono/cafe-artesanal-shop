
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft, Clock, Coffee, MapPin } from 'lucide-react';
import { useProduct } from '@/hooks/useProduct';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { product, isLoading, error } = useProduct(id!);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, value));
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
      toast({
        title: "Añadido al carrito",
        description: `${product.name} ha sido añadido a tu carrito.`,
        duration: 3000,
      });
    }
  };
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          Cargando producto...
        </div>
      </Layout>
    );
  }
  
  if (error || !product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-red-500 mb-4">Error al cargar el producto</p>
          <Button variant="outline" onClick={handleGoBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" onClick={handleGoBack} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Productos
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <h1 className="font-serif text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-coffee-dark">${product.price.toFixed(2)}</span>
              <span className="text-sm font-medium px-3 py-1 bg-coffee-cream/50 rounded-full">{product.weight}</span>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg">{product.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-coffee-medium mr-2" />
                  <span>Origen: {product.origin}</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="h-5 w-5 text-coffee-medium mr-2" />
                  <span>Tostado: {product.roast}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-coffee-medium mr-2" />
                  <span>Tostado: {product.roastedDate}</span>
                </div>
              </div>
              
              <div className="pt-6 border-t">
                <div className="flex items-center mb-6">
                  <span className="mr-4">Cantidad:</span>
                  <div className="flex items-center border rounded">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-none"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      <span className="text-xl">-</span>
                    </Button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                      className="w-16 text-center border-none focus:outline-none focus:ring-0"
                      min="1"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-none"
                      onClick={() => handleQuantityChange(quantity + 1)}
                    >
                      <span className="text-xl">+</span>
                    </Button>
                  </div>
                </div>
                
                <Button 
                  onClick={handleAddToCart}
                  className="w-full h-12 bg-coffee-dark hover:bg-coffee-medium"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Añadir al Carrito
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
