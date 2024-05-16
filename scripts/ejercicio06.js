//Definiendo arrays

let lista_personas = ['Perico', 'Maria'];

document.write(lista_personas); // Imprime perico, maria
document.write('<br>');
document.write(lista_personas[0]); // Imprime perico
document.write('<br>');
document.write(lista_personas['1']); // Imprime maria
document.write('<br>');
document.write(lista_personas['a']); // Imprime Undefined
document.write('<br>');

//Agregar un nombre al final
lista_personas.push('Goku');
document.write(lista_personas);
document.write('<br>');

//Agregar al inicio del array
lista_personas.unshift('Vegeta');
document.write('<br>');

//Tamanio del array
document.write(lista_personas.length) //4
document.write('<br>');

//Eliminar
let eliminado = lista_personas.pop(0) //Goky
document.write(`Se elimino a ${eliminado} y el array quedo como ${lista_personas}<br>`);

eliminado = lista_personas.shift(lista_personas.length - 1);
document.write(`Se elimino a ${eliminado} y el array quedo como ${lista_personas}<br>`);

//Modificando lista
lista_personas[0] = 'Periquin';
document.write(lista_personas);
document.write('<br>');

lista_personas[10] = 'Freezer';
document.write(lista_personas);
document.write('<br>');
document.write(lista_personas.length);
document.write('<br>');
document.write(lista_personas[5]);