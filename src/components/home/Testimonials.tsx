
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "María González",
    role: "Barista Profesional",
    content: "El mejor café que he probado. La frescura y los sabores son incomparables. Desde que lo descubrí, es el único que uso en mi cafetería.",
    rating: 5
  },
  {
    name: "Carlos Rodríguez",
    role: "Amante del Café",
    content: "Me encanta el compromiso con la calidad y la sostenibilidad. Cada taza es una experiencia única. Totalmente recomendado.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    role: "Chef Pastelera",
    content: "He probado muchos cafés para mis postres, pero ninguno tiene el aroma y el sabor que ofrece Café Artesanal. Es simplemente excepcional.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-coffee-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre por qué nuestros clientes eligen Café Artesanal y cómo ha transformado su experiencia con el café.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-coffee-gold text-coffee-gold" />
                ))}
              </div>
              <p className="mb-6 italic text-gray-700">{testimonial.content}</p>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
