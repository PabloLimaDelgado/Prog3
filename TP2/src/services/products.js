import Swal from "sweetalert2";

import {
  handleGetProductsLocalStorage,
  setInLocalStorage,
} from "../persistence/localStorage.js";
import { closeModal, productoActivo } from "../views/modal.js";
import { handleGetProductsToStore, handleRenderList } from "../views/store.js";

export const handleSveOrModifyElements = () => {
  const name = document.getElementById("name").value;
  const imagen = document.getElementById("imagen").value;
  const precio = document.getElementById("precio").value;
  const categoria = document.getElementById("categoria").value;

  let object = null;

  if (productoActivo) {
    object = {
      ...productoActivo,
      name,
      imagen,
      precio,
      categoria,
    };
  } else {
    object = {
      id: new Date().toISOString(),
      name,
      imagen,
      precio,
      categoria,
    };
  }

  Swal.fire({
    title: "Correcto",
    text: "Producto guardado correctamente",
    icon: "success"
  });

  setInLocalStorage(object);
  handleGetProductsToStore();
  closeModal();
};

/*===ELIMINAR UN ELEMENTO===*/

export const handleDeleteProduct = () => {
  Swal.fire({
    title: "¿Desea eliminar elemento?",
    text: "¡Si lo eliminas sera permanentemente!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      const products = handleGetProductsLocalStorage();
      const result = products.filter((el) => el.id !== productoActivo.id);

      localStorage.setItem("products", JSON.stringify(result));
      const nuevoProducto = handleGetProductsLocalStorage();
      handleRenderList(nuevoProducto);
      closeModal();
    } else {
      closeModal();
    }
  });
};
