let boton = document.getElementById('button');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let dpi = document.getElementById('dpi');
let usuario = document.getElementById('usuario');
let password1 = document.getElementById('contraseña1');
let password2 = document.getElementById('contraseña2');

boton.addEventListener('click', () => {
    const datos = [nombre.value, apellido.value, dpi.value, usuario.value, password1.value, password2.value];
    const campos = ['nombre', 'apellido', 'dpi', 'usuario', 'password1', 'password2'];

    for (let i = 0; i < datos.length; i++) {
        if (datos[i] === '') {
            alert('El campo ' + campos[i] + ' está vacío');
            return;
        }
    }

    if (password1.value !== password2.value) {
        alert('Las contraseñas no coinciden');
        return;
    }

    for (let i = 0; i < datos.length; i++) {
        console.log(campos[i] + ': ' + datos[i]);
    }
});
