import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products.service";

export const useItems = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Reinicia el estado de carga
      try {
        const res = await getAllProducts();
        setProductsData(res.data.products);
      } catch (error) {
        setError(error); // Captura el error
        console.log(error);
      } finally {
        setLoading(false); // Asegúrate de que loading se establezca en false
      }
    };

    fetchProducts();
  }, []);

  return { productsData, loading, error }; // Retorna el estado de error
};