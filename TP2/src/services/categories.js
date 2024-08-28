import { handleGetProductsLocalStorage } from "../persistence/localStorage.js";
import { categoriaActiva } from "../views/modal.js";
import { handleRenderList } from "../views/store.js";

//Render de la vista categoria
const handleFilterProductsByCategory = (categoryIn) => {
  const products = handleGetProductsLocalStorage();

  switch (categoryIn) {
    case categoriaActiva:
      handleRenderList(products);
    case "Todo":
      handleRenderList(products);
      break;
    case "Hamburguesas":
    case "Papas":
    case "Gaseosas":
      const result = products.filter((el) => el.categoria === categoryIn);
      handleRenderList(result);
      break;
    case "mayorPrecio":
      const resultMayor = products.sort((a, b) => b.precio - a.precio);
      handleRenderList(resultMayor);
      break;
    case "menorPrecio":
      const resultMenor = products.sort((a, b) => a.precio - b.precio);
      handleRenderList(resultMenor);
      break;
    default:
      break;
  }
};

export const renderCategories = () => {
  const ulList = document.getElementById("listFilter");

  ulList.innerHTML = `
  <li id="Todo">Todos los productos</li>
  <li id="Hamburguesas">Hamburguesas</li>
  <li id="Papas">Papas</li>
  <li id="Gaseosas">Gaseosas</li>
  <li id="mayorPrecio">Mayor precio</li>
  <li id="menorPrecio">Menor precio</li>
  `;

  const liElements = ulList.querySelectorAll("li");

  liElements.forEach((liElement) => {
    liElement.addEventListener("click", () => {
      handleClick(liElement);
    });
  });

  const handleClick = (elemento) => {
    handleFilterProductsByCategory(elemento.id);
    liElements.forEach((el) => {
      if (el.classList.contains("li__active")) {
        el.classList.remove("li__active");
      } else {
        if (elemento === el) {
          el.classList.add("li__active");
        }
      }
    });
  };
};
