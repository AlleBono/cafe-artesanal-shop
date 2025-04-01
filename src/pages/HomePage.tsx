
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import About from '@/components/home/About';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import Layout from '@/components/layout/Layout';
import { useFeaturedProducts } from '@/hooks/useFeaturedProducts';

const HomePage = () => {
  const { products, isLoading, error } = useFeaturedProducts();
  
  return (
    <Layout>
      <Hero />
      {isLoading ? (
        <div className="py-16 text-center">Cargando productos destacados...</div>
      ) : error ? (
        <div className="py-16 text-center text-red-500">Error al cargar los productos</div>
      ) : (
        <FeaturedProducts products={products} />
      )}
      <About />
      <Features />
      <Testimonials />
    </Layout>
  );
};

export default HomePage;
