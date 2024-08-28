export const handleGetProductsLocalStorage = () => {
  const products = JSON.parse(localStorage.getItem("products"));
  if (products) {
    return products;
  } else {
    return [];
  }
};

/*===== GUARDAR LOCAL STORAGE =====*/
//RECIBIR UN PRODUCTO
export const setInLocalStorage = (productIn) => {
  if (productIn) {
    //TRAER LOS ELEMENTOS
    let productInLocal = handleGetProductsLocalStorage();
    const existingIndex = productInLocal.findIndex(
      (productsLocal) => productsLocal.id === productIn.id
    );

    //VERIFICAR SI EL ELEMENTO EXISTE
    if (existingIndex !== -1) {
      productInLocal[existingIndex] = productIn;
    } else {
      //SINO AGREGARSE
      productInLocal.push(productIn);
    }
    //SETEAR EL NUEVO ARRAY
    localStorage.setItem("products", JSON.stringify(productInLocal));
  }
};
