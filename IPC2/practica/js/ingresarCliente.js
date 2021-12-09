let boton = document.getElementById('button');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let dpi = document.getElementById('dpi');
let departamento = document.getElementById('departamento');


boton.addEventListener('click', () => {

    const datos = [nombre.value, apellido.value, dpi.value, departamento.value];
    const campos = ['nombre', 'apellido', 'dpi', 'departamento'];

    for (let i = 0; i < datos.length; i++) {
        if (datos[i] === '') {
            alert('¡El campo ' + campos[i] + ' está vacío!');
            return;
        }
    }

    for (let i = 0; i < datos.length; i++) {
        console.log(campos[i] + ': ' + datos[i]);
    }
});
