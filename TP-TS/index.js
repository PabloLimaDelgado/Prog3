"use strict";
/*===EJERCICIO 3===*/
{
    const textoUno = "Hola, TypeScript!";
    const numeroUno = 123;
    const booleanoUno = true;
    const fechaUno = new Date("November 22, 2001 03:24:00");
    const ejercicioUno = document.getElementById("ejercicioUno");
    if (ejercicioUno) {
        ejercicioUno.innerHTML = `
        <p>${textoUno}</p>
        <p>${numeroUno}</p>
        <p>${booleanoUno}</p>
        <p>${fechaUno.toLocaleDateString()}</p>
        `;
    }
}
/*===EJERCICIO 4===*/
{
    const ejercicioDos = document.getElementById("ejercicioDos");
    const inputDos = document.getElementById("inputDos");
    const btnDos = document.getElementById("btnDos");
    const transformarCadena = function (num) {
        return num.toString();
    };
    if (btnDos) {
        btnDos.addEventListener("click", (event) => {
            event.preventDefault();
            if (inputDos && ejercicioDos) {
                const valorInput = inputDos.value;
                if (valorInput) {
                    ejercicioDos.innerHTML = `
          <p>Número convertido a Cadena: ${transformarCadena(Number(valorInput))}</p>
        `;
                }
            }
        });
    }
}
/*===EJERCICIO 5===*/
{
    const numerosLista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const ejercicioTres = document.getElementById("ejercicioTres");
    const sumatoria = numerosLista.reduce((acc, curr) => acc + curr, 0);
    if (ejercicioTres) {
        ejercicioTres.innerHTML = "";
        numerosLista.forEach((element) => (ejercicioTres.innerHTML += `
                <li>${element}</li>
            `));
        ejercicioTres.innerHTML += `
         <li>La sumatoria es: ${sumatoria}</li>
      `;
    }
}
/*===EJERCICIO 6===*/
{
    const ejercicioCuatro = document.getElementById("ejercicioCuatro");
    const estudiante1 = {
        estudiante: "Pablo Lima",
        edad: 22,
        curso: "Programacion 3",
    };
    if (ejercicioCuatro) {
        ejercicioCuatro.innerHTML = `
         <p>${estudiante1.estudiante}</p>
         <p>${estudiante1.edad}</p>
         <p>${estudiante1.curso}</p>
        `;
    }
}
/*===EJERCICIO 7===*/
{
    const ejercicioCinco = document.getElementById("ejercicioCinco");
    const direccion = {
        calle: "Cangallo 3011",
        ciudad: "Mendoza",
        codigoPostal: "5500",
    };
    if (ejercicioCinco) {
        ejercicioCinco.innerHTML = `
        <p>Calle: ${direccion.calle}, en la ciudad de ${direccion.ciudad}, con codigo postal ${direccion.codigoPostal}</p>
        `;
    }
}
/*===EJERCICIO 8===*/
{
    const ejercicioSeis = document.getElementById("ejercicioSeis");
    class Persona {
        constructor(nombre, correo) {
            this.nombre = nombre;
            this.correo = correo;
        }
        saludar() {
            return `Hola, mi nombre es ${this.nombre}`;
        }
    }
    const personaUno = new Persona("Pablo", "limapablomdz@gmail.com");
    if (ejercicioSeis) {
        ejercicioSeis.innerHTML = `
        <p>${personaUno.saludar()}</p>
        `;
    }
}
/*===EJERCICIO 9===*/
{
    const ejercicioSiete = document.getElementById("ejercicioSiete");
    class Persona {
        constructor(_nombre, _edad) {
            this._nombre = _nombre;
            this._edad = _edad;
        }
        getNombre() {
            return this._nombre;
        }
        getEdad() {
            return this._edad;
        }
        setNombre(_nombre) {
            this._nombre = _nombre;
        }
        setEdad(_edad) {
            this._edad = _edad;
        }
        presentar() {
            return `Hola soy ${this.getNombre()} y tengo ${this.getEdad()} años`;
        }
    }
    const personaUno = new Persona("Pablo", 22);
    if (ejercicioSiete) {
        ejercicioSiete.innerHTML = `
    <p>${personaUno.presentar()}</p>
    `;
    }
}
/*===EJERCICIO 10===*/
{
    const ejercicioOcho = document.getElementById("ejercicioOcho");
    const btnOcho = document.getElementById("btnOcho");
    const inputOcho = document.getElementById("inputOcho");
    class Caja {
        constructor(_value) {
            this._value = _value;
        }
        getValue() {
            return this._value;
        }
        setValue(_value) {
            this._value = _value;
        }
    }
    if (btnOcho && inputOcho) {
        btnOcho.addEventListener("click", (event) => {
            event.preventDefault();
            let valorInput = inputOcho.value;
            let caja1 = new Caja(valorInput);
            if (ejercicioOcho) {
                ejercicioOcho.innerHTML = `
        <p>El valor del input es: ${caja1.getValue()}</p>
        `;
            }
        });
    }
}
/*===EJERCICIO 11===*/
{
    const ejercicioNueve = document.getElementById("ejercicioNueve");
    function identidad(identidad) {
        return identidad;
    }
    const numero = identidad(123);
    const cadena = identidad("Hola");
    if (ejercicioNueve) {
        ejercicioNueve.innerHTML = `
        <p>Numero: ${numero}</p>
        <p>Cadena: ${cadena}</p>
        `;
    }
}
/*===EJERCICIO 12===*/
{
    let Lenguajes;
    (function (Lenguajes) {
        Lenguajes[Lenguajes["Espa\u00F1ol"] = 0] = "Espa\u00F1ol";
        Lenguajes[Lenguajes["Ingles"] = 1] = "Ingles";
        Lenguajes[Lenguajes["Portugues"] = 2] = "Portugues";
        Lenguajes[Lenguajes["Frances"] = 3] = "Frances";
        Lenguajes[Lenguajes["Aleman"] = 4] = "Aleman";
        Lenguajes[Lenguajes["Italiano"] = 5] = "Italiano";
        Lenguajes[Lenguajes["Otro"] = 6] = "Otro";
    })(Lenguajes || (Lenguajes = {}));
    const inputDiez = document.getElementById("inputDiez");
    const selectDiez = document.getElementById("selectDiez");
    const ejercicioDiez = document.getElementById("ejercicioDiez");
    if (selectDiez) {
        Object.keys(Lenguajes)
            .filter((key) => isNaN(Number(key))) //Lo hago porque sino me sale primero del 0 al 6
            .forEach((key) => {
            const option = document.createElement("option");
            option.value = key;
            option.text = key;
            selectDiez.add(option);
        });
    }
    if (inputDiez && selectDiez && ejercicioDiez) {
        inputDiez.addEventListener("click", (event) => {
            event.preventDefault();
            const valorSeleccionado = selectDiez.value;
            ejercicioDiez.innerHTML = `La opcion seleccionada es: ${valorSeleccionado}`;
        });
    }
}
