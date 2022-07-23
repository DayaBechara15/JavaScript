const prompt = require("prompt-sync")({ sigint: true });

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
const edadesGrupo1 = [21, 12, 15, 18, 25];
const edadesGrupo2 = [2, 11, 54, 63, 24];

let main = () => {
  console.log();
  console.log("------------------------------------------");
  console.log("Ingrese el arreglo con el que desea trabar");
  console.log("------------------------------------------");
  console.log("1 -> Si es con edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5]");
  console.log("2 -> Si es con edadesGrupo1 = [21, 12, 15, 18, 25]");
  console.log("3 -> Si es con edadesGrupo2 = [2, 11, 54, 63, 24];");
  let opcArreglo = parseInt(prompt("\nIngrese una opcion: "));
  switch (opcArreglo) {
    case 1:
      console.log("Usted eligio = [" + edades + "]");
      return ejemplo(edades);
      break;
    case 2:
        console.log("Usted eligio = [" + edadesGrupo1 + "]");  
    return ejemplo(edadesGrupo1);
      break;
    case 3:
        console.log("Usted eligio = [" + edadesGrupo2 + "]");
      return ejemplo(edadesGrupo2);
      break;
    default:
      return "No es una opcion correcta.";
      break;
  }
  return "";
};

let ejemplo = (opcion) => {
  console.log("\n---------------------------");
  console.log("Ingrese el ejemplo a probar");
  console.log("---------------------------");
  console.log("1 -> Obtener en un nuevo array las edades menores a 18.");
  console.log("2 -> Obtener en un nuevo array las edades mayor o igual a 18.");
  console.log("3 -> Obtener en un nuevo array las edades igual a 18.");
  console.log("4 -> Obtener el menor.");
  console.log("5 -> Obtener el mayor.");
  console.log("6 -> Obtener el promedio de edades.");
  console.log("7 -> Incrementar en 1 todas las edades.");
  let opc = parseInt(prompt("\nIngrese una opcion: "));
  switch (opc) {
    case 1:
      return ejemplo1(opcion);
      break;
    case 2:
      return ejemplo2(opcion);
      break;
    case 3:
      return ejemplo3(opcion);
      break;
    case 4:
      return ejemplo4(opcion);
      break;
    case 5:
      return ejemplo5(opcion);
      break;
    case 6:
      return ejemplo6(opcion);
      break;
    case 7:
      return ejemplo7(opcion);
      break;
    default:
      return "No es una opcion correcta.";
      break;
  }
  return "";
};

/* Obtener en un nuevo array las edades menores a 18. */
let ejemplo1 = (edades) => {
  const nuevosEdades = [];
  for (let index = 0; index < edades.length; index++) {
    if (edades[index] < 18) {
      nuevosEdades.push(edades[index]);
    }
  }
  return "\nmenores de 18 = [" + nuevosEdades + "]";
};

/* Obtener en un nuevo array las edades mayor o igual a 18. */
let ejemplo2 = (edades) => {
  const nuevosEdades = [];
  for (let index = 0; index < edades.length; index++) {
    if (edades[index] >= 18) {
      nuevosEdades.push(edades[index]);
    }
  }
  return "\nmayores e iguales a 18 = [" + nuevosEdades + "]";
};

/* Obtener en un nuevo array las edades igual a 18. */
let ejemplo3 = (edades) => {
  const nuevosEdades = [];
  for (let index = 0; index < edades.length; index++) {
    if (edades[index] === 18) {
      nuevosEdades.push(edades[index]);
    }
  }
  return "\niguales a 18 = [" + nuevosEdades + "]";
};

/* Obtener el menor. */
let ejemplo4 = (edades) => {
  let min = 9999;
  for (let index = 0; index < edades.length; index++) {
    if (edades[index] < min) {
      min = edades[index];
    }
  }
  return "\nel minimo valor es " + min;
};

/* Obtener el mayor.  */
let ejemplo5 = (edades) => {
  let max = 0;
  for (let index = 0; index < edades.length; index++) {
    if (edades[index] > max) {
      max = edades[index];
    }
  }
  return "\nel maximo valor es " + max;
};

/* Obtener el promedio de edades. */
let ejemplo6 = (edades) => {
  let suma = 0;
  for (let index = 0; index < edades.length; index++) {
    suma = suma + edades[index];
  }
  return "\nel promedio es " + suma / edades.length;
};

/*Incrementar en 1 todas las edades.*/
let ejemplo7 = (edades) => {
  let suma = 0;
  for (let index = 0; index < edades.length; index++) {
    edades[index] = edades[index] + 1;
  }
  return "\nincrementamos en 1 cada valor " + edades;
};

console.log(main());