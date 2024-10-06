// src/hooks/useItemById.js
import { useState, useEffect } from 'react';

export const useItemById = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Aquí va tu lógica para obtener el producto por ID
        // Asegúrate de manejar los estados de loading y error
    }, [id]);

    return { product, loading, error };
};
