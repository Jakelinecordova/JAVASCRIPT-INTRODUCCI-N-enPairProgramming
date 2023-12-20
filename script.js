const sumarNumeros = (numero1, numero2) => numero1 + numero2;
const resultado = sumarNumeros(5, 10);
console.log(resultado);

const restarNumeros = (numero1, numero2) => numero1 - numero2;
const resultado2 = restarNumeros(20, 10);
console.log(resultado2);

const productoNumeros = (numero1, numero2) => numero1 * numero2;
const resultado3 = productoNumeros(4, 5);
console.log(resultado3);

const divisionNumeros = (numero1, numero2) => numero1 / numero2;
const resultado4 = divisionNumeros(20, 5);
console.log(resultado4);

const calcularPotencia = (base, exponente) => Math.pow(base, exponente);
const base = 2;
const exponente = 3;
const resultado5 = calcularPotencia(base, exponente);
console.log(resultado5);

const concatenarCadenas = (cadena1, cadena2) => cadena1 + cadena2;
let texto1 = "cómo te llamas ";
let texto2 = "¿Dónde vives?";
let resultado6 = concatenarCadenas(texto1, texto2);
console.log(resultado6)

const longitudCadena = (cadena) => cadena.length;
let texto = "¡Trust the process!";
let longitud = longitudCadena(texto);
console.log(longitud);

const convertirAMayusculas = (cadena) => cadena.toUpperCase();
let frase1 = "¡Trust the process!";
let textoEnMayusculas = convertirAMayusculas(frase1);
console.log(textoEnMayusculas)

const convertirAMinusculas = (cadena) => cadena.toLowerCase();
let frase2 = "IF YOY WANT TO LIVE A HAPPY LIFE, TIE IT TO A GOAL. NOT TO PEOPLE OR THINGS!";
let textoEnMinusculas = convertirAMinusculas(frase2);
console.log(textoEnMinusculas);


const obtenerCaracterEnPosicion = (cadena, indice) => {
    if (indice < 0 || indice >= cadena.length) {
        return "Índice fuera de rango";
    }
    return cadena.charAt(indice);
};
let frase3 = "Hola, chicas!";
let posicion = 5;
let caracterEnPosicion = obtenerCaracterEnPosicion(frase3, posicion);
console.log("Carácter en la posición", posicion, ":", caracterEnPosicion);