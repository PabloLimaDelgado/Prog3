/*STORE*/
import { handleGetProductsLocalStorage } from "../persistence/localStorage.js";
import { openModal, setProductoActivo } from "./modal.js";

//FUNCION QUE TRAE LOS ELEMENTOS Y LLAMAR AL RENDER
export const handleGetProductsToStore = () => {
  const products = handleGetProductsLocalStorage();
  handleRenderList(products);
};

//FILTRA Y RENDERIZA LA SECCION CON TODOS SUS RESPECTIVOS PRODUCTOS
export const handleRenderList = (productsIn) => {
  //FILTRADO DE ARRAYS
  const burgers = productsIn.filter((el) => el.categoria === "Hamburguesas");
  const papas = productsIn.filter((el) => el.categoria === "Papas");
  const gaseosas = productsIn.filter((el) => el.categoria === "Gaseosas");

  //RENDERIZA ELEMENTOS SECCION
  const renderProductGroup = (products, title) => {
    if (products.length > 0) {
      const productsHTML = products.map((producto, index) => {
        return `
        <div class="container__target__item" id="product-${producto.categoria}-${index}"> 
            <div> 
                <img src='${producto.imagen}'/>
                <div>
                    <h2>${producto.name}</h2>
                </div>
                <div>
                    <p><b>Precio:</b> ${producto.precio}</p>
                </div>
           </div>
        </div>
        `;
      });

      //RETORNA LA SECCION CON TODOS LOS ELEMENTOS DENTRO
      return `
      <section class="section__store">
        <h3>${title}</h3>
        <div class="container__product">
            ${productsHTML.join("")}
        </div>
      </section>
      `;
    } else {
      return "";
    }
  };

  //RENDERIZAR CADA UNO DE LOS PRODUCTOS DENTRO DE LA CATEGORIA
  const appContainer = document.getElementById("storeContainer");

  appContainer.innerHTML = `
  ${renderProductGroup(burgers, "Hamburguesas")}
  ${renderProductGroup(papas, "Papas")}
  ${renderProductGroup(gaseosas, "Gaseosas")}
  `;

  //AÑADEN LOS EVENTOS DE MANERA DINAMICA
  const addEvents = (productsIn) => {
    productsIn.forEach((element, index) => {
      const productContainer = document.getElementById(
        `product-${element.categoria}-${index}`
      );
      productContainer.addEventListener("click", () => {
        console.log(element);
        
        setProductoActivo(element);
        openModal();
      });
    });
  };

  addEvents(burgers);
  addEvents(papas);
  addEvents(gaseosas);
};
