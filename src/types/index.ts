
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string; // "250g", "500g", "1kg"
  image: string;
  origin: string;
  roast: string; // "Ligero", "Medio", "Oscuro"
  roastedDate: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
