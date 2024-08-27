import { renderCategories } from "./src/services/categories.js";
import { setInLocalStorage } from "./src/persistence/localStorage.js";
import { handleGetProductsToStore } from "./src/views/store.js";

import "./css/style.css";

//APLICACION
handleGetProductsToStore();
renderCategories();

/*=== POPUP ===*/
const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener("click", () => {
  openModal();
});

const cancelBtn = document.getElementById("cancelBtn");

cancelBtn.addEventListener("click", () => {
  closeModal();
});

const openModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "flex";
};

const closeModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "none";
};

/* GUARDAR O MODIFICIAR ELEMENTOS*/

const acceptBtn = document.getElementById("acceptBtn");

acceptBtn.addEventListener("click", () => {
  handleSveOrModifyElements();
});

const handleSveOrModifyElements = () => {
  const name = document.getElementById("name").value;
  const imagen = document.getElementById("imagen").value;
  const precio = document.getElementById("precio").value;
  const categoria = document.getElementById("categoria").value;

  let object = {
    id: new Date().toISOString(),
    name,
    imagen,
    precio,
    categoria,
  };
  setInLocalStorage(object);
  closeModal();
};
