const prompt = require("prompt-sync")({ sigint: true });

/* Ejercicio de If else y switch case */
let numero = parseInt(prompt('Ingresa un número '));
let otroNumero = parseInt(prompt ('Ingresa otro número '));
let operacion = prompt ('Operación a realizar ');

/* function prueba (operacion,numero,otroNumero){
    const calculadora = {
        '+':suma,
        '-':resta,
        '*':multiplicación,
        '/':division,
    }
    return calculadora[operacion](numero,otroNumero);
} */


function operacionAEjecutar(operacion,numero,otroNumero){
    switch (operacion) {
        case '+': return suma(numero,otroNumero);
            break;
        case '-':return resta(numero,otroNumero);
            break;
        case '*':return multiplicación(numero,otroNumero);
            break;
        case '/':return division(numero,otroNumero);
            break;
        default: console.log('La operación no existe');
            break;
    }
    return 0;
}

function suma(numero, otroNumero){
    return numero+otroNumero;
}

function resta(numero, otroNumero){
    return numero-otroNumero;
}

function multiplicación(numero, otroNumero){
    return numero*otroNumero;
}

function division(numero, otroNumero){
    if (otroNumero===0) {
        console.log('No se puede dividir entre 0');
    } else {
        return numero/otroNumero;
    }
    return '';
}

console.log(operacionAEjecutar(operacion,numero,otroNumero));
/* console.log(prueba(operacion,numero,otroNumero)); */



