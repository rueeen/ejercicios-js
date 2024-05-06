//Datos de entrada

/**
 * Formularios
 * Para recibir datos por formulario lo podemos hacer de diferentes formas
 * por medio del form action -> la mas comun pero que veremos mas adelante
 * captura directa desde DOM por js
 */

const nombre = document.querySelector('#inptNombre');
console.log(nombre);

/**
 * Para poder ejecutar la captura del dato utilizaremos un boton, pero el boton
 * necesita de un evento click. El evento click puede invocarse de diferentes formas
 * pero vamos a utilizar la propiedad onClick y una funcion
 */

/**Funciones
 * Hay 2 tipos de funciones, las clasicas y las arrow function que veremos mas adelante
 */

function saludandoDesdeBoton(){
    console.log('Saludando desde funcion');
    let texto_ingresado = nombre.value;
    console.log(texto_ingresado);
};

let dato = prompt('Ingrese un dato');
console.log(dato);