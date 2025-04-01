
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="hero-section text-white py-32 md:py-48">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-2xl mx-auto md:mx-0">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Descubre el Auténtico Sabor del Café Artesanal
          </h1>
          <p className="mb-8 text-lg md:text-xl">
            Café de especialidad cultivado en altura, tostado a mano y enviado directamente a tu hogar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-coffee-gold hover:bg-coffee-medium text-coffee-dark font-medium text-lg px-8 py-6">
              <Link to="/products">Comprar Ahora</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-6">
              <Link to="/about">Nuestra Historia</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
