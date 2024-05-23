const condiciones = document.querySelector('#condiciones');
// btn, inpt, chk, slc
const btnAceptar = document.querySelector('#aceptar');

function validar_elemento(id) {
    const element = document.getElementById(id);
    const help = document.getElementById('help' + id);

    if (element.value.trim() === '') {
        console.log('Campos vacios');
        alerta_mensajes(element, help, 'Campos vacios!')
        return null;
        console.log('No se ejecuta')
    }
    else {
        return element.value;
    }
}

function alerta_mensajes(element, help, mensaje) {
    help.innerHTML = mensaje;
    help.classList.add('is-danger');

    if(element) {
        element.classList.add('is-danger');
    }
    setTimeout(function () {
        help.innerHTML = '';
        help.classList.remove('is-danger');
        if(element) {
            element.classList.remove('is-danger');
        }
    }, 3000);
}

condiciones.addEventListener('change', function () {
    console.log('Se ejecuto el evento change');

    btnAceptar.disabled = !condiciones.checked;
});

btnAceptar.addEventListener('click', function () {
    console.log('Se ejecuto el evento click');
    btnAceptar.classList.add('is-loading');

    const nombre = validar_elemento('nombre');
    const mensaje = validar_elemento('mensaje');
    const opciones = validar_elemento('opciones');

    const rdbYes = document.querySelector('#yes');
    const rdbNo = document.querySelector('#no');
    const helpRdb = document.querySelector('#helpradio');
    let radio;

    if(rdbYes.checked){
        console.log('Se selecciono YES');
        radio = 'yes';
    }
    else if(rdbNo.checked){
        console.log('Se selecciono NO');
        radio = 'no'
    }
    else{
        console.log('No se selecciono nada');
        alerta_mensajes(null, helpRdb, 'Debe seleccionar una opcion');
    }

    if(nombre && mensaje && opciones && radio){
        console.log(`Los datos ingreasdos son: ${nombre} ${mensaje} ${opciones} ${radio}`);
    }

    setTimeout(function() {
        btnAceptar.classList.remove('is-loading');
    }, 3000);
});