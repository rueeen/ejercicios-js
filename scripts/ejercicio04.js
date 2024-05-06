//Operadores de comparacion

let a = 5;
let b = 3;
let c = '5';
let d = 'tres';

/**
 * mayor que >
 * menor que <
 * mayor o igual que >=
 * menor o igual que <=
 * compracion ==
 * asignacion =
 * distinto !=
 * comparacion estricta ===
 * distincion estricta !==
 * Todos estos operadores devolveran un true o false
 */
console.log(a > b); //true
console.log(a < b); //false
console.log(a >= 5); //true
console.log(a <= 3); //false

//comparaciones
// 5 == '5' -> Esto compara valores
console.log('El resultado es:', a == c); //true
// 5 === '5' -> Esto compara valores y TIPOS
console.log('El resultado es:', a === c); //false