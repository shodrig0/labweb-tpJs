const formulario = document.querySelectorAll('miForm input')

const expresiones = {
    // letras, espacios y tildes
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,

    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,

    // previo @ posterior
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

function validar() {

    let verificacion = true

    let nombre = document.getElementById('nombre')
    let apellido = document.getElementById('apellido')
    let email = document.getElementById('email')
    let comentarios = document.getElementById('comentariosBox')

    function printearError(id) {
        let inputPintar = document.getElementById('id')
        inputPintar.style.borderColor = 'red'
    }

    function desPrintearError(id) {
        let inputPintar = document.getElementById('id')
        inputPintar.style.borderColor = ''
    }

    if (!expresiones.nombre.test(nombre.value)) {
        printearError('nombre')
        verificacion = false
    } else {
        desPrintearError('nombre')
    }

    if (!expresiones.apellido.test(apellido.value)) {
        printearError('apellido')
        verificacion = false
    } else {
        desPrintearError('apellido')
    }

    if (!expresiones.email.test(email.value)) {
        printearError('email')
        verificacion = false
    } else {
        desPrintearError('email')
    }

    if (!expresiones.comentarios.test(comentarios.value)) {
        printearError('comentariosBox')
        verificacion = false
    } else {
        desPrintearError('comentariosBox')
    }

    if (verificacion) {
        alert("Funciona!!!")
    }
}

addEventListener('DOMContentLoaded', formulario, validar)