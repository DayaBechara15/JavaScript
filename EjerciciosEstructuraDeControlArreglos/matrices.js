/* Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima 
o sean iguales a 10, pero menores que 1000 */

let sumaEntreValores = (arreglo) => {
    let suma = 0;

    for (let index = 0; index < 4; index++) {
        for (let indey = 0; indey < 6; indey++) {
            if (arreglo[index][indey] > 10 && arreglo[index][indey] < 100) {
                suma = suma + arreglo[index][indey];
            }
        }
        
    }
    return suma;
}

let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 95, 5097, 100, 4]
];

/* ------------------------------------------------------------------------------------- */

let mes = [[1135,2500,900,1600,2800,3650,1100],
            [1750,1890,1900,1300,898,1750,2800],
            [1700,1150,1690,1900,1770,4500,2560],
            [800,1250,1430,2100,1980,1270,950]];

/* a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila 
representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la 
matriz. Recordar que las matrices comienzan siempre en posición 0. */

let totalGastosPorSemanaIngresada = (arreglo, numSemana) => {
    let totalGasto = 0;
    for (let index = 0; index < arreglo[numSemana-1].length; index++) {
        totalGasto=totalGasto+arreglo[numSemana-1][index];
    }
    return totalGasto;
}

let totalGastosPorDia = (arreglo) => {
    let totalGasto = [];
    for (let index = 0; index < 7; index++) {
        let totalSemana = 0;
        for (let indey = 0; indey < 4; indey++) {
            totalSemana = totalSemana + arreglo[indey][index];
        }
        totalGasto.push(totalSemana)
    }
    return totalGasto;
}

/* b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan 
dar el total de un día en particular, por ejemplo del día 3, acá también tengamos 
en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0. */

let gastoDiaPorSemana = (dia, semana) => {
    switch (dia) {
        case "lunes" || "Lunes":
            return mes[semana-1][0];
            break;
        case "martes" || "Martes":
                return mes[semana-1][1];
                break;
        case "miercoles" || "Miercoles":
            return mes[semana-1][2];
            break;        
        case "jueves" || "Jueves":
            return mes[semana-1][3];
            break;
        case "viernes" || "Viernes":
            return mes[semana-1][4];
            break;
        case "sabado" || "Sabado":
            return mes[semana-1][5];
            break;    
        case "domingo" || "Domingo":
            return mes[semana-1][6];
            break;    
            default: "Datos incorrectos"
            break;
    }
}

/* c) Por último, es necesario tener el total de gastos realizados en el mes. */

let gastoTotalMes = (arreglo) => {
    let total = 0;
    for (let index = 0; index < 4; index++) {
        for (let indey = 0; indey < 7; indey++) {
            total += arreglo[index][indey];
        }
        
    }
    return total;
}

/* d) Obtener cuál fue la semana que más gastos se realizaron. 
Indicar el día que más gastos se realizaron. */

let totalGastosPorSemana = (arreglo) => {
    let semanaMax = -1;
    let indiceSemana = -1;
    for (let index = 0; index < 4; index++) {
        let totalSemana = 0;
        for (let indey = 0; indey < 7; indey++) {
            totalSemana = totalSemana + arreglo[index][indey];
        }
        if (totalSemana > semanaMax) {
            semanaMax = totalSemana;
            indiceSemana = index + 1;
        }
    }
    return "Gasto de la semana: " + semanaMax + " / " + "Semana: " + indiceSemana;
}

/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

let matriz = [[], [], [], [], []]

let cargarMatriz = (matriz) => {
    for (let index = 0; index < 5; index++) {
        for (let indey = 0; indey < 5; indey++) {
            matriz[index][indey] = Math.floor(Math.random() * 11)
        }
    }
    return matriz
}

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

let sumataTotalMatriz = (matriz) => {
    cargarMatriz(matriz);
    console.table(matriz);
    let suma = 0;
    for (let index = 0; index < 5; index++) {
        for (let indey = 0; indey < 5; indey++) {
            suma += matriz[index][indey];
        }
    }
    return "La suma total de componentes es: " + suma
}

// Completa la función para que retorne una matriz
// de 10x10

function generarMatriz10por10() {
    var matriz = [[], [], [], [], [],[], [], [], [], []];
    for (let index = 0; index < 10; index++) {
        for (let indey = 0; indey < 10; indey++) {
            matriz[index][indey] = 10*index + indey + 1;
        }
    }
	return matriz;
}

function sumaDiagonales() {
    let sumaRojo = 0;
    let sumaVerde = 0;
    let matriz = generarMatriz10por10();
    for (let index = 0; index < 10; index++) {
        sumaRojo = sumaRojo + matriz[index][index]; 
        sumaVerde = sumaVerde + matriz[9-index][index];      
    }
    return "Rojo: " + sumaRojo + " / Verde: " + sumaVerde;
}
console.table(sumaDiagonales());
