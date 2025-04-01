
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold mb-4">CAFÉ<span className="text-coffee-gold">ARTESANAL</span></h3>
            <p className="text-sm">Ofrecemos café de alta calidad cultivado de manera sostenible, tostado artesanalmente para garantizar el mejor sabor y aroma.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-coffee-gold mb-4 uppercase text-sm">Navegación</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-coffee-gold transition-colors">Inicio</Link></li>
              <li><Link to="/products" className="text-sm hover:text-coffee-gold transition-colors">Productos</Link></li>
              <li><Link to="/about" className="text-sm hover:text-coffee-gold transition-colors">Nosotros</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-coffee-gold transition-colors">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-coffee-gold mb-4 uppercase text-sm">Contáctanos</h4>
            <ul className="space-y-2 text-sm">
              <li>Calle Café #123</li>
              <li>Ciudad Arábica, CP 12345</li>
              <li>info@cafeartesanal.com</li>
              <li>+52 123 456 7890</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-coffee-gold mb-4 uppercase text-sm">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-coffee-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-coffee-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-coffee-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Café Artesanal. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
