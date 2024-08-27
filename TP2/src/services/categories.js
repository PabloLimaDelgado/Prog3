//Render de la vista categoria

export const renderCategories = () => {
  const ulList = document.getElementById("listFilter");

  ulList.innerHTML = `
  <li id="todo">Todos los productos</li>
  <li id="burgers">Hamburguesas</li>
  <li id="papas">Papas</li>
  <li id="gaseosas">Gaseosas</li>
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
