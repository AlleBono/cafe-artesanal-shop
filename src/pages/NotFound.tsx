
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-coffee-cream/10 py-20">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="font-serif text-6xl font-bold mb-4 text-coffee-dark">404</h1>
          <p className="text-xl text-coffee-medium mb-8">¡Oops! Página no encontrada</p>
          <p className="mb-8 text-muted-foreground">
            Parece que el café que buscas no está disponible. ¿Por qué no exploras nuestros productos disponibles?
          </p>
          <Button asChild className="bg-coffee-dark hover:bg-coffee-medium">
            <Link to="/">Volver al Inicio</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
