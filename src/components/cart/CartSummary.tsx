
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CartSummary = () => {
  const { cartItems } = useCart();
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;
  
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="font-serif text-xl font-bold mb-4">Resumen del Pedido</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Envío</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      <Button 
        className="w-full bg-coffee-dark hover:bg-coffee-medium"
        disabled={cartItems.length === 0}
      >
        Proceder al Pago
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      
      <div className="mt-4">
        <Button asChild variant="link" className="w-full">
          <Link to="/products">Continuar Comprando</Link>
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
