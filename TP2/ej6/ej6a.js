function datosPersonales() {
    let nombre = "Juan"
    let apellido = "Pérez"
    let estadoCivil = "Soltero"
    let edad = 44
    let FechaNacimiento = "1/1/1980"
    let DNI = 3333338
    document.write(
        "Nombre: " +
        nombre +
        "<br>" +
        "Apellido: " +
        apellido +
        "<br>" +
        "Estado Civil: " +
        estadoCivil +
        "<br>" +
        "Edad: " +
        edad +
        "<br>" +
        "Fecha de Nacimiento: " +
        FechaNacimiento +
        "<br>" +
        "DNI: " +
        DNI +
        "<br>"
    )
}

function validar() {
    let password = prompt("Ingrese su contraseña")
    let bandera = false
    if (password === 'minombre') {
        bandera = true
    }
    return bandera
}

if (validar()) {
    datosPersonales()
} else {
    document.write('contraseña incorrecta')
}
