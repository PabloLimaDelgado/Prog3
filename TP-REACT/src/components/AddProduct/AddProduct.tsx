import React, { useState } from "react";
import { Header } from "./Header/Header.tsx";
import { FormProduct } from "./FormProduct/FormProduct.tsx";
import { ListProduct } from "./ListProduct/ListProduct.tsx";

interface ItemProduct {
  precio: number;
  imagen: string;
  nombre: string;
}

export const AddProduct = () => {
  const [products, setProducts] = useState<ItemProduct[]>([]);

  const handleAddProduct = (newItem: ItemProduct) => {
    setProducts((prev) => [...prev, newItem]);
  };
  return (
    <>
      <Header />
      <h2 className="text-center">Formulario</h2>
      <FormProduct handleAddProduct={handleAddProduct} />
      <h2 className="text-center">Productos</h2>
      {products.length > 0 ? (
        <ListProduct arryItems={products} />
      ) : (
        <h3 className="text-center">No hay productos</h3>
      )}
    </>
  );
};
