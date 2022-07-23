/* Ejercicio 1
1. Revisa el siguiente archivo, identifica sus componentes, vamos a estar usándolos a lo largo de este ejercicio.  
a. ¿Qué tipo de dato contiene la variable ‘alumnos’?
Contiene: Strings (cadena de caracteres), tipos de datos numéricos y arrays */

/* b. ¿Qué propiedades tiene la estructura definida en el archivo final.js? 
Objetos literales: Método de un objeto con su propiedades y valores.
*/
/* 
2. Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma ascendente. (*)  */
function ordernarAlumnosPorLegajo(alumnos) {
    const legajosOrdenados = alumnos.map(alumno => alumno.legajo).sort();
    const alumnosOrdenados = [];
    for (const legajo of legajosOrdenados) {
        for (const alumno of alumnos) {
            if (alumno.legajo === legajo) {
                alumnosOrdenados.push(alumno);
                break;
            }
        }
    }
    return alumnosOrdenados;
}

// const alumnosOrdenados = ordernarAlumnosPorLegajo(alumnos);
// console.log(alumnosOrdenados);


/* Ejercicio 2
Dado el objeto alumno = {
id: 5,
nombre: "Javier",
apellido: "Riera",
legajo: 20220125,
notas: [10,9,8,7,9]
}
Crear un método que retorne el promedio de notas. (*)
 */

alumno.obtenerPromedio = function() {
    let sumaNotas = 0;
    for (const nota of this.notas) {
        sumaNotas += nota;
    }
    return sumaNotas / this.notas.length;
}
/* 
const promedio = alumno.obtenerPromedio();
console.log(promedio); */

/* Crear una función que ordene las notas del alumno de forma descendente. (*) */
function ordenarNotasDesc(notas) {
    return notas.sort(function(a, b) {
        return a - b;
    }).reverse();
}

// console.log(ordenarNotasDesc(alumno.notas));


/* 
Ejercicio 3
Crea una matriz de 3x3, cuadrada, con números enteros positivos en cada una de sus posiciones. */
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

/* Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 3.  */
function sumarMultiples3() {
    let suma = 0;
    for (const fila of matriz) {
        for (const valor of fila) {
            if (valor % 3 === 0) {
                suma += valor;
            }
        }
    }
    return suma;
}

// const suma = sumarMultiples3();
// console.log(suma);
/* 
Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es par. */
function verificarSumaPar() {
    const suma = sumarMultiples3();
    if (suma % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// const esPar = verificarSumaPar();
// console.log(esPar);

/* Crear una función que retorne la suma de las diagonales de la matriz. */
function sumarDiagonal() {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i];
    }
    return suma;
}

// const sumaDiagonal = sumarDiagonal();
// console.log(sumaDiagonal);
