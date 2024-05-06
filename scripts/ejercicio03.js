/**
 * Operadores matematicos
 */

let a = 5;
let b = 3;

let c = '5';
let d = 'tres'

//Operador + entre numbers los suma
let resultado = a + b
console.log(resultado); //8
console.log(typeof resultado); //number

//Operador + entre un str y otra cosa CONCATENA los datos y da como resultado un str
resultado = a + c;
console.log(resultado); //55
console.log(typeof resultado); //string

//resta entre number y str
resultado = d - a; 
console.log("Este es el resultado de la resta "+resultado); //NaN -> Not a Number
console.log(typeof resultado); //NaN

//resta entre numbers
resultado = a - b; 
console.log(resultado); //2
console.log(typeof resultado); //number

//Multiplicacion
//Entre numbers
resultado = a * b;
console.log(resultado); //15
console.log(typeof resultado); //number

//Entre number y str
resultado = a * c; //Un str que no si parezca a un number "5" si realizara la operacion
console.log(resultado); //15
console.log(typeof resultado); //number

resultado = a * d; //Un str que no se parezca a un number "tres" no realizara la operacion
console.log(resultado); //NaN
console.log(typeof resultado); //number

//Division
//Entre numbers
resultado = a / b;
console.log(resultado); // 1.666666
console.log(typeof resultado); //number

//Entre number y str
resultado = a / c; //Un str que no si parezca a un number "5" si realizara la operacion
console.log(resultado); //1
console.log(typeof resultado); //number

resultado = a / d; //Un str que no se parezca a un number "tres" no realizara la operacion
console.log(resultado); //NaN
console.log(typeof resultado); //number