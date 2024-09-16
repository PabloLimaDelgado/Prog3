/*===EJERCICIO 3===*/
{
  const textoUno: string = "Hola, TypeScript!";
  const numeroUno: number = 123;
  const booleanoUno: boolean = true;
  const fechaUno: Date = new Date("November 22, 2001 03:24:00");

  const ejercicioUno: HTMLElement | null =
    document.getElementById("ejercicioUno");

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
  const ejercicioDos: HTMLElement | null =
    document.getElementById("ejercicioDos");
  const inputDos: HTMLInputElement | null = document.getElementById(
    "inputDos"
  ) as HTMLInputElement | null;
  const btnDos: HTMLElement | null = document.getElementById("btnDos");

  const transformarCadena: (numero: number) => string = function (
    num: number
  ): string {
    return num.toString();
  };

  if (btnDos) {
    btnDos.addEventListener("click", (event) => {
      event.preventDefault();
      if (inputDos && ejercicioDos) {
        const valorInput = inputDos.value;
        if (valorInput) {
          ejercicioDos.innerHTML = `
          <p>Número convertido a Cadena: ${transformarCadena(
            Number(valorInput)
          )}</p>
        `;
        }
      }
    });
  }
}

/*===EJERCICIO 5===*/
{
  const numerosLista: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const ejercicioTres: HTMLElement | null =
    document.getElementById("ejercicioTres");

  const sumatoria: number = numerosLista.reduce((acc, curr) => acc + curr, 0);

  if (ejercicioTres) {
    ejercicioTres.innerHTML = "";

    numerosLista.forEach(
      (element) =>
        (ejercicioTres.innerHTML += `
                <li>${element}</li>
            `)
    );

    ejercicioTres.innerHTML += `
         <li>La sumatoria es: ${sumatoria}</li>
      `;
  }
}

/*===EJERCICIO 6===*/
{
  interface Estudiante {
    estudiante: string;
    edad: number;
    curso: string | null;
  }

  const ejercicioCuatro: HTMLElement | null =
    document.getElementById("ejercicioCuatro");

  const estudiante1: Estudiante = {
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
  const ejercicioCinco: HTMLElement | null =
    document.getElementById("ejercicioCinco");

  type Direccion = {
    calle: string;
    ciudad: string;
    codigoPostal: string;
  };

  const direccion: Direccion = {
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
  const ejercicioSeis: HTMLElement | null =
    document.getElementById("ejercicioSeis");

  interface Usuario {
    nombre: string;
    correo: string;

    saludar(): string;
  }

  class Persona implements Usuario {
    nombre: string;
    correo: string;

    constructor(nombre: string, correo: string) {
      this.nombre = nombre;
      this.correo = correo;
    }

    saludar(): string {
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
  const ejercicioSiete: HTMLElement | null =
    document.getElementById("ejercicioSiete");

  class Persona {
    private _nombre: String;
    private _edad: number;

    constructor(_nombre: String, _edad: number) {
      this._nombre = _nombre;
      this._edad = _edad;
    }

    public getNombre(): String {
      return this._nombre;
    }

    public getEdad(): number {
      return this._edad;
    }

    public setNombre(_nombre: String) {
      this._nombre = _nombre;
    }

    public setEdad(_edad: number) {
      this._edad = _edad;
    }

    public presentar(): String {
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
  const ejercicioOcho: HTMLElement | null =
    document.getElementById("ejercicioOcho");
  const btnOcho: HTMLElement | null = document.getElementById("btnOcho");
  const inputOcho: HTMLInputElement | null = document.getElementById(
    "inputOcho"
  ) as HTMLInputElement | null;

  class Caja<T> {
    private _value: T;

    constructor(_value: T) {
      this._value = _value;
    }

    public getValue(): T {
      return this._value;
    }

    public setValue(_value: T) {
      this._value = _value;
    }
  }
  if (btnOcho && inputOcho) {
    btnOcho.addEventListener("click", (event) => {
      event.preventDefault();
      let valorInput = inputOcho.value;

      let caja1 = new Caja<String>(valorInput);
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

  function identidad<T>(identidad: T): T {
    return identidad;
  }

  const numero = identidad<number>(123);
  const cadena = identidad<String>("Hola");

  if (ejercicioNueve) {
    ejercicioNueve.innerHTML = `
        <p>Numero: ${numero}</p>
        <p>Cadena: ${cadena}</p>
        `;
  }
}

/*===EJERCICIO 12===*/
{
  enum Lenguajes {
    Español,
    Ingles,
    Portugues,
    Frances,
    Aleman,
    Italiano,
    Otro,
  }

  const inputDiez: HTMLInputElement | null = document.getElementById(
    "inputDiez"
  ) as HTMLInputElement | null;

  const selectDiez: HTMLSelectElement | null = document.getElementById(
    "selectDiez"
  ) as HTMLSelectElement | null;

  const ejercicioDiez: HTMLElement | null =
    document.getElementById("ejercicioDiez");

  if (selectDiez) {
    Object.keys(Lenguajes)
      .filter((key) => isNaN(Number(key))) //Lo hago porque sino me sale primero del 0 al 6
      .forEach((key) => {
        const option: HTMLOptionElement = document.createElement("option");
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
