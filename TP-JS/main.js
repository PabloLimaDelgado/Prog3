/*===INTRODUCCION A JS===*/
//EJERCICIO 1
/*{
  let a, b, c;

  a = 10;
  b = 11;
  c = a + b;

  console.log(`La suma de a + b es ${c}`);

  //EJERCICIO 2
  const nombre = prompt("Ingresa tu nombre");
  alert(`Bienvenido, ${nombre}`);
  console.log(`Bienvenido, ${nombre}`);
}*/

/*===OPERADORES LOGICOS Y CONDICIONALES===*/
/*{
  //EJERCICIO 1
  let a, b;

  a = 10;
  b = 20;

  let mayor = a > b ? "a es mayor que b" : "b es mayor que a";
  console.log(mayor);

  //EJERCICIO 2
  let numero = prompt("Ingrese un numero");

  let numeroParidad =
    numero % 2 == 0 ? "El número es par" : "El numero es impar";
  alert(numeroParidad);
  console.log(numeroParidad);
  
}*/

/*===OPERADORES DE ASIGNACION Y BUCLES===*/
/*{
  //EJERCICIO 1
  let numero = 10;

  while (numero != 0) {
    console.log(numero);
    numero--;
  }

  //EJERCICIO 2
  let numero2;

  do {
    numero2 = prompt("Ingrese un numero");

    if (numero2 > 100) {
      console.log(`El numero ingresado ${numero2} es mayor a 100`);
    }
  } while (numero2 <= 100);
}*/

/*===FUNCIONES DE JAVASCRIPT===*/
/*{
  //EJERCICIO 1
  const esPar = (numero) => {
    let trueFalse = numero % 2 == 0 ? true : false;
    return trueFalse;
  };

  let variable = prompt("Ingrese un número");
  console.log(esPar(variable)); 

  //EJERCICIO 2
  const convertirCelciusAFarenheit = (numero2) => {
    return numero2 * 1.8 + 32;
  };

  console.log(convertirCelciusAFarenheit(prompt("Ingrese un numero")));
}*/

/*===OBJETOS EN JAVASCRIPT===*/
/*{
  //EJERCICIO 1
  let persona = {
    nombre: "Pablo",
    edad: 21,
    ciudad: "Mendoza",

    cambiarCiudad: function (ciudadNueva) {
      this.ciudad = ciudadNueva;
    },
  };

  console.log(persona.ciudad);
  persona.cambiarCiudad("Buenos Aires");
  console.log(persona.ciudad);

  //EJERCICIO 2
  let libro = {
    libro: "EL hobbit",
    autor: "JRR tolkien",
    año: 1937,

    esViejoONuevo: function () {
      let fechaActual = new Date();
      let años = fechaActual.getFullYear() - this.año > 10 ? true : false;
      return años;
    },
  };

  console.log(libro.esViejoONuevo());
}*/

/*===ARRAYS===*/
/*{
  //EJERCICIO 1
  const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let array2 = [];
  console.log(array1);

  array1.forEach((element) => {
    array2.push(element * 2);
  });

  console.log(array2);

  //EJERCICIO 2
  let arrayPares = [];

  for (let index = 1; index <= 20; index++) {
    if (index % 2 == 0) {
      arrayPares.push(index);
    }
  }

  console.log(arrayPares);
}*/

/*===INTRODUCCION AL DOM===*/
/*{
  //EJERCICIO 1
  const btnAzul = document.getElementById("btnAzul");
  const divUno = document.getElementById("divUno");

  btnAzul.addEventListener("click", () => {
    divUno.classList.toggle("azul");
  });

  //EJERCICIO 2
  const nombre = document.getElementById("nombre");
  const btnEnviar = document.getElementById("btnEnviar");
  
  btnEnviar.addEventListener("click", () => {
    alert(`Bienvenido ${nombre.value}.`);
  });
}*/

/*===EVENTOS EN DOM===*/
/*{
  //EJERCICIO 1
  const ulList = document.getElementById("ulList");

  ulList.addEventListener("click", (event) => {
    //Verificamos que el elemento clicado es un li
    if (event.target.tagName === "LI") {
      //Convertimos los hijos de la lista en un array y usamos indexOf() para encontrar la posición del elemento li
      const index = Array.from(ulList.children).indexOf(event.target) + 1;
      console.log(`Has presionado sobre el elemento ${index}`);
    }
  });

  //EJERCICIO 2
  const inputDiv4 = document.getElementById("inputDiv4");
  const btnDeshabilitar = document.getElementById("btnDeshabilitar");
  const btnHabilitar = document.getElementById("btnHabilitar");

  btnHabilitar.addEventListener("click", () => {
    inputDiv4.disabled = false;
  });

  btnDeshabilitar.addEventListener("click", () => {
    inputDiv4.disabled = true;
  });
}*/

/*===LOCAL STORAGE===*/
const inputCorreo = document.getElementById("inputCorreo");
const btnCorreo = document.getElementById("btnCorreo");
const mensaje = document.getElementById("mensaje");
const btnEliminar = document.getElementById("btnEliminar");

// Evento para guardar el correo
btnCorreo.addEventListener("click", (e) => {
  e.preventDefault();
  getDataInput();
});

// Función para obtener el correo ingresado y almacenarlo
const getDataInput = () => {
  const mail = inputCorreo.value.trim();

  if (!mail) {
    alert(`No hay ningún correo`);
    return;
  }

  // Obtiene los datos existentes en localStorage
  let datos = JSON.parse(localStorage.getItem("datos")) || [];

  // Verifica si el correo ya existe
  if (datos.includes(mail)) {
    mensaje.textContent = `Correo: El correo ${mail} ya ha sido ingresado.`;
  } else {
    datos.push(mail);
    localStorage.setItem("datos", JSON.stringify(datos));
  }
};

// Evento para eliminar los correos guardados
btnEliminar.addEventListener("click", () => {
  mensaje.textContent = `Correo: `;
});
