/**
 * Tipos de variable
 */

//Tipo STR
let texto_comilla_simple = 'Esto es un string';
let texto_comilla_doble = "Esto es un string";

//Como saber el tipo de una variable
console.log(typeof texto_comilla_doble); //Imprime string

//Tipo NUMBER
let numero_entero = 10;
let numero_flotante = 10.1;

console.log(typeof numero_entero, typeof numero_flotante); //Imprime number number

//Tipo BOOLEAN
let verdadero = true;
let falso = false;

/**
 * undefined -> va aparecer cuando una variable esta creada pero no tiene valor
 */

let variable_no_definida;

console.log(typeof variable_no_definida); //undefined

/**
 * null -> es la ausencia de valor
 */

let variable_nula = null;
