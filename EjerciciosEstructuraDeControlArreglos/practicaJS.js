const prompt = require("prompt-sync")({ sigint: true });
/* Escribí un programa que le pida al usuario ingresar una frase y
la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frase
debés utilizar el método prompt() y para escribir en la consola
debés utilizar el método console.log(). */

/* let frase = prompt("Ingrese una frase ");
let repite = (frase) => frase;
console.log("La frase que ingreso es : " + '"' + repite(frase) + '"'); */

/* Escribí un programa que le pregunte al usuario su nombre e
imprima "Hola " seguido del nombre y un signo de exclamación.
Por ejemplo, si el usuario ingresa "Pedro" el programa debe
imprimir en la consola "Hola Pedro!". */

/* let nombre = prompt("Ingrese su nombre ");
let saludo = (nombre) => nombre + "!";
console.log("El nombre que ingreso es: " + saludo(nombre)); */

/* Escribí un programa que le pida al usuario ingresar un número,
luego le pida un segundo número, e imprima en la consola la
suma de los dos números que ingresó el usuario. */

/* let num1 = parseInt(prompt("Ingrese el primer numero "));
let num2 = parseInt(prompt("Ingrese el segundo numero "));
let suma = (a,b) => a+b;
console.log('La suma de los numeros es ' + suma(num1, num2)); */

/* Escribí un programa que le pida al usuario su año de
nacimiento e imprima su edad actual en la consola con la frase
"Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2019 y el usuario
ingresa 1999, el programa debe imprimir en la consola: “Tienes
20 años”. */

/* let anioNac = parseInt(prompt("Ingrese la edad "));
let edad = (anioNac) => 2022 - anioNac;
console.log("El anio de nacimiento es " + edad(anioNac)); */

/* Escribí un programa que piense un número de forma aleatoria
del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
número es correcto debe imprimir en la consola "Felicitaciones,
ese era!", de lo contrario, debe imprimir "Lo siento, intenta
nuevamente!" */

/* let numero = parseInt(prompt("Adivine el numero "));
let random = (numero) => {
  let rand = Math.floor(Math.random() * 11);
  //console.log(rand); 
  while (numero !== rand) {
    console.log("Siga intentando");
    numero = parseInt(prompt("Adivine el numero "));
  }
  console.log("Acerto con el numero...");
  return ' ';
};
console.log(random(numero)); */

/* Escribí un programa que imprima los números pares del 0 al 100. */

/* var numeros = new Array(51);
let centena = () => {
    for (let index = 0; index < 51; index++) {
        numeros[index] = index*2;
    }
    return numeros;
}

console.log(centena()); */

/* Escribí un programa que itere sobre el arreglo nombres e
imprima cada uno en la consola: const nombres = ["Pedro",
"Pablo", "Maria", "Juan", "Diana"]; */

/* const nombres = ["Pedro","Pablo", "Maria", "Juan", "Diana"];

let iterar = (nombres) => {
    console.log(nombres);
    var invNombres = new Array(4);
    for (let index = 0; index < 5; index++) {
        invNombres[index] = nombres[Math.floor(Math.random() * 4)];
    }
    console.log(invNombres);
    return '';
} 

iterar(nombres); */

/* Construí un pseudocódigo que permita ingresar un número, si
el número es mayor de 500, se debe calcular y mostrar en
pantalla el 18% de este. */

/* let mostrarPorcentaje = (numero) => numero > 500 ? numero * 0.8 : numero;
console.log(mostrarPorcentaje(600));
console.log(mostrarPorcentaje(400)); */

/* Escribí una función llamada elemento que recibe un arreglo
como parámetro. La función debe devolver el valor que se
encuentra en la tercera posición. Si el arreglo no tiene al menos
3 elementos deberá retornar -1. */

/* var arreglo = new Array(10)
let elemento = (arreglo) => {
    for (let index = 0; index < arreglo.length; index++) {
        arreglo[index] = Math.floor(Math.random() * 10);
    }
    console.log(arreglo);
    return arreglo[2];
}

console.log(elemento(arreglo)); */

/* Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras. */

/* let cifras = (numero) => {
    let cont = 0;
    let alter = numero;
    while (alter > 0){
        alter = Math.floor(alter/10);
        cont++;
    }
    if (cont === 1) {
        return `Lo que falta para ser un numero de dos cifras es ${100 - numero}`;
    }else if (cont === 2){
        return `Lo que falta para ser un numero de tres cifras es ${1000 - numero}`;
    }else{
        return -1;
    }
    
}

console.log(cifras(5));
console.log(cifras(30));
console.log(cifras(900)); */

/* Hacer un algoritmo que muestre el promedio de varias
notas o de N notas ingresadas, se debe definir el valor de N
para conocer la cantidad de notas a ingresar. */
/* 
let cant = parseInt(prompt("Ingrese la cantidad de notas "));
let promedio = (cant) => {
    var arreglo = new Array(cant);
    let suma = 0;
    for (let index = 0; index < cant; index++){
        arreglo[index] = parseInt(prompt("Ingrese una nota "));
    }
    for (let index = 0; index < arreglo.length; index++) {
        suma = suma + arreglo[index];
    }
    return `${suma/cant}`
} 

console.log(promedio(cant)); */

/* Hacer un programa que calcule la suma de los N primeros
números naturales, dónde N es el número límite ingresado por
teclado. */

/* let numero = parseInt(prompt("ingrese el tope de la sumatoria "));

let sumatoria = (numero) => {
  var arreglo = new Array(numero);
  let suma = 0;
  for (let index = 0; index < numero; index++) {
    arreglo[index] = index + 1;
  }
  for (let index = 0; index < numero; index++) {
    suma = suma + arreglo[index];
  }
  console.log(arreglo);
  return suma;
};

console.log(numero); */

// 1 , 1, 2, 3 , 5, 8 , 13
/* function fibonacci(numero){
    var arreglo = new Array(numero);
    arreglo[0] = 1;
    arreglo[1] = 1;
    for (let index = 2; index <= numero; index++){
        arreglo[index] = arreglo[index-2] + arreglo[index-1]
    }
    return arreglo;
}

console.log(fibonacci(5));
console.log(fibonacci(15));
console.log(fibonacci(30)); */

/* const people = [
  { name: "Gustavo", age: 30 },
  { name: "Martin", age: 33 },
  { name: "Vaeria", age: 16 },
];

console.table(people); */
