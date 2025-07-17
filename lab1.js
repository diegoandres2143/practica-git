// Laboratorio de datos primitivos jeje

// Nota, no pude comprobar el programa dado que node no me permite el ingreso
// de datos con prompts, sé cómo solucionarlo.

// 1. Variables y tipos de datos

let nombre = "Diego";
let edad = 24;
let esEstudiante = true;

// Ej 2

let sinValor = undefined
let valorNulo = null
console.log(sinValor, valorNulo);

// 2. Ingreso de datos por teclado

let anoNacimiento = prompt("Ingrese su año de nacimiento"); 

let edadAprox = 2025 - Number(anoNacimiento);
console.log("Tu edad es:", edadAprox);

// Ej 2

let num1 = prompt("Ingresa el primer número:");
let num2 = prompt("Ingresa el segundo número:");
let suma = Number(num1) + Number(num2);
console.log("La suma de los dos números es:", suma);

// 3. Condicional if

let edadUsuario = prompt("Ingresa tu edad");
if (edadUsuario >= 18) {
    console.log("Usted es mayor de edad, puedes entrar");
} else {
    console.log("Usted es menor de edad, no puedes entrar");
}

// Ej 2

let numero = prompt(Number("Ingresa un número:"));

if (numero > 0) {
    console.log("Es positivo");
} else if (numero < 0) {
    console.log("Es negativo");
} else {
    console.log("Es cero");
}

// 4. Bucle While

let limite = prompt("Ingresa un número, para contar desde el 1 hasta: ");
let contador = 1;

while (contador != Number(limite)) {
    console.log(contador);
    contador++;
}

// Ej 2

let contraseña = prompt("Ingrese su contraseña: ");

while (contraseña != "1234") {
    contraseña = prompt("Incorrecto. Intenta de nuevo: ");
}

console.log("Contraseña correcta, ¡Bienvenido!");


// 5. Bucle For

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Ej 2

let usuario = prompt("Ingresa un número para mostrar su tabla de multiplicar: ");

for (let i = 1; i <= 10; i++) {
    console.log(`${usuario} x ${i} = ${usuario * i}`);
}
