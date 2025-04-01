
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Café Especial Colombia',
    description: 'Café de especialidad cultivado en las montañas de Colombia. Notas de chocolate negro, frutos rojos y un toque de caramelo. Perfecto para disfrutar en cualquier momento del día.',
    price: 18.99,
    weight: '250g',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
    origin: 'Colombia',
    roast: 'Medio',
    roastedDate: '15/06/2023',
    featured: true
  },
  {
    id: '2',
    name: 'Café Orgánico Chiapas',
    description: 'Café orgánico cultivado en la región de Chiapas, México. Notas de nuez, vainilla y caramelo con un cuerpo medio y acidez equilibrada.',
    price: 20.99,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    origin: 'México',
    roast: 'Medio-Oscuro',
    roastedDate: '10/06/2023',
    featured: true
  },
  {
    id: '3',
    name: 'Café Natural Etiopía',
    description: 'Café de proceso natural de Etiopía con intensos sabores a frutos rojos y una acidez brillante. Ideal para métodos de filtrado que realzan sus notas florales.',
    price: 24.99,
    weight: '250g',
    image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac',
    origin: 'Etiopía',
    roast: 'Ligero',
    roastedDate: '18/06/2023',
    featured: true
  },
  {
    id: '4',
    name: 'Café Brasil Cerrado',
    description: 'Café de la región de Cerrado en Brasil. Notas de chocolate con leche, nueces y caramelo. Cuerpo completo con baja acidez.',
    price: 17.99,
    weight: '500g',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
    origin: 'Brasil',
    roast: 'Medio',
    roastedDate: '05/06/2023'
  },
  {
    id: '5',
    name: 'Café Guatemala Antigua',
    description: 'Cultivado en la región de Antigua, Guatemala. Este café ofrece notas de chocolate, especias y frutas con un cuerpo equilibrado y acidez brillante.',
    price: 22.99,
    weight: '1kg',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    origin: 'Guatemala',
    roast: 'Medio',
    roastedDate: '12/06/2023'
  },
  {
    id: '6',
    name: 'Café Costa Rica Tarrazú',
    description: 'Café de la famosa región de Tarrazú en Costa Rica. Notas de naranja, miel y chocolate. Acidez brillante y cuerpo equilibrado.',
    price: 23.99,
    weight: '250g',
    image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac',
    origin: 'Costa Rica',
    roast: 'Medio-Ligero',
    roastedDate: '20/06/2023'
  }
];
