import { handleGetProductsLocalStorage } from "../persistence/localStorage.js";
import { handleRenderList } from "../views/store.js";

export const handleSearchProduct = () => {
  const inputSearch = document.getElementById("inputSearch");
  const product = handleGetProductsLocalStorage();

  const result = product.filter((el) =>
    el.name.toLowerCase().includes(inputSearch.value)
  );
  handleRenderList(result);
};
