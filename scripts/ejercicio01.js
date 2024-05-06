/**
 * Definiendo variables
 */

/**
 * var -> Forma antigua NO RECOMENDADA
 * let -> Forma moderna, mas coveniente que var
 * const -> Forma constante
 */

var nombre = 'Perico';
var nombre = 'Maria'; //Esto se permite debido a que var no genera conflictos en el scope
let apellido = 'Los palotes';
//let apellido = 'Petunias'; esto da error por redifinicion en scope 
apellido = 'Las petunias'; //Esto si podemos hacerlo con variables let

const saludo = 'Saludo constante';
//saludo = 'Otra cosa'; Esto da error debido a intentar sobreescribir el valor de una constante