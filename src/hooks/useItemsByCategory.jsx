import React, { useState, useEffect } from "react";
import { getProductsByCategory } from "../services/products.service";

export const useItemsByCategory = (categoryId) => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Reinicia el estado de carga
      setError(null); // Reinicia el estado de error

      try {
        const res = await getProductsByCategory(categoryId);
        setProductsData(res.data.products);
      } catch (error) {
        setError(error); // Captura el error
        console.log(error);
      } finally {
        setLoading(false); // Asegúrate de que loading se establezca en false
      }
    };

    if (categoryId) {
      fetchProducts(); // Solo llama a la función si categoryId es válido
    }
  }, [categoryId]);

  return { productsData, loading, error }; // Retorna el estado de error
};