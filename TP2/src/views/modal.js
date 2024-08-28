import { handleDeleteProduct } from "../services/products.js";

export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn;
};

export let productoActivo = null;

export const setProductoActivo = (productoIn) => {
  productoActivo = productoIn;
};

export const openModal = () => {
  const modal = document.getElementById("modalPopUp");
  const deleteBtn = document.getElementById("deleteBtn");

  modal.style.display = "flex";

  if (productoActivo) {
    deleteBtn.style.display = "block";
  } else {
    deleteBtn.style.display = "none";
  }

  if (productoActivo) {
    let name = document.getElementById("name");
    let imagen = document.getElementById("imagen");
    let precio = document.getElementById("precio");
    let categoria = document.getElementById("categoria");

    name.value = productoActivo.name;
    imagen.value = productoActivo.imagen;
    precio.value = productoActivo.precio;
    categoria.value = productoActivo.categoria;
  }
};

export const closeModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "none";
  setProductoActivo(null);
  resetModal();
};

const resetModal = () => {
  let name = document.getElementById("name");
  let imagen = document.getElementById("imagen");
  let precio = document.getElementById("precio");
  let categoria = document.getElementById("categoria");

  name.value = "";
  imagen.value = "";
  precio.value = 0;
  categoria.value = "";
};
const deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", () => {
  handleBtnDelete();
});
const handleBtnDelete = () => {
  handleDeleteProduct();
};
