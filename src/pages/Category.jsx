import React from "react";
import { useItemsByCategory } from "../hooks";
import { ItemListContainer, Loader } from "../components";
import { useParams } from "react-router";

export const Category = () => {
  const { id } = useParams();
  const { productsData, loading, error } = useItemsByCategory(id); // Asegúrate de que el hook maneje el error

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', margin: '50px' }}>
        <h2>Error al cargar productos</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return <ItemListContainer products={productsData} />;
};