import { renderCategories } from "./src/services/categories.js";
import { handleGetProductsToStore } from "./src/views/store.js";
import { openModal, closeModal } from "./src/views/modal.js";
import { handleSveOrModifyElements } from "./src/services/products.js";
import { handleSearchProduct } from "./src/services/searchBar.js";

/*=== APLICACION ===*/
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

/*=== GUARDAR ===*/
const acceptBtn = document.getElementById("acceptBtn");

acceptBtn.addEventListener("click", () => {
  handleSveOrModifyElements();
});

/*=== BTN SEATCH ===*/
const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", () => {
  handleSearchProduct();
});
