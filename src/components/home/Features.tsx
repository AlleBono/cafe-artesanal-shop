
import { Coffee, Leaf, Package, Truck } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: "Tostado Artesanal",
    description: "Tostamos en pequeños lotes para garantizar la frescura y realzar los sabores únicos de cada variedad de café."
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Nuestro café se cultiva sin pesticidas ni químicos, respetando el medio ambiente y la salud de los consumidores."
  },
  {
    icon: Package,
    title: "Diferentes Pesos",
    description: "Ofrecemos bolsas de 250g, 500g y 1kg para adaptarnos a tus necesidades de consumo y mantener siempre tu café fresco."
  },
  {
    icon: Truck,
    title: "Envío Directo",
    description: "Enviamos nuestros productos directamente a tu puerta para garantizar la máxima frescura y calidad."
  }
];

const Features = () => {
  return (
    <section className="bg-coffee-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">¿Por Qué Elegir Nuestro Café?</h2>
          <p className="text-coffee-cream/80 max-w-2xl mx-auto">
            Descubre lo que hace que nuestro café sea especial y por qué nuestros clientes confían en la calidad de nuestros productos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-coffee-dark/80 p-6 rounded-lg border border-coffee-light/20 hover:border-coffee-gold/50 transition-colors">
              <feature.icon className="h-10 w-10 text-coffee-gold mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-coffee-cream/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
