let usuario = document.getElementById('usuario');
let password = document.getElementById('password');
let boton = document.getElementById('button');


boton.addEventListener('click', function () {
    const datos = [usuario.value, password.value];
    const campos = ['Nombre', 'Password'];


    for (let i = 0; i < datos.length; i++) {
        if (datos[i] === '') {
            alert('¡El campo ' + campos[i] + " está vacío!");
            return;
        }
    }

    for (let i = 0; i < datos.length; i++) {
        console.log(campos[i] + ": " + datos[i]);
    }

});

