
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import aboutImage from '@/assets/about-coffee.jpg';

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Café Artesanal de Alta Calidad</h2>
            <p className="mb-6 text-lg">
              En Café Artesanal, nos dedicamos a ofrecer el mejor café de especialidad. Trabajamos directamente con pequeños productores que cultivan sus granos con técnicas tradicionales y sostenibles.
            </p>
            <p className="mb-8 text-lg">
              Cada bolsa de café que ofrecemos pasa por un riguroso proceso de selección y tostado artesanal para garantizar que llegue a tu mesa con todo su aroma y sabor intactos.
            </p>
            <Button asChild className="bg-coffee-dark hover:bg-coffee-medium">
              <Link to="/about">Conoce Más Sobre Nosotros</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
            <img 
              src={aboutImage} 
              alt="Café artesanal de alta calidad" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
