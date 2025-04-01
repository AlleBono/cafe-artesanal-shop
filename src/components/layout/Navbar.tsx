
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-serif text-2xl font-bold text-coffee-dark">CAFÉ<span className="text-coffee-gold">ARTESANAL</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-coffee-medium transition-colors">Inicio</Link>
            <Link to="/products" className="font-medium hover:text-coffee-medium transition-colors">Productos</Link>
            <Link to="/about" className="font-medium hover:text-coffee-medium transition-colors">Nosotros</Link>
            <Link to="/contact" className="font-medium hover:text-coffee-medium transition-colors">Contacto</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-coffee-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium py-2 hover:text-coffee-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
              <Link to="/products" className="font-medium py-2 hover:text-coffee-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Productos</Link>
              <Link to="/about" className="font-medium py-2 hover:text-coffee-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
              <Link to="/contact" className="font-medium py-2 hover:text-coffee-medium transition-colors" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
