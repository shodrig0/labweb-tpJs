var nombre, apellido, estadoCivil, edad, fechaNacimiento, dni, confirmar, numeroEntero;

function valorSeleccionado(valor) {
    
    var numero;

    if (valor < 0) {
        numero = -1;
    } else if (valor >= 0 && valor < 10) {
        numero = 0;
    } else if (valor >= 10 && valor < 50) {
        numero =  1;
    } else if (valor >= 50 && valor < 100) {
        numero =  2;
    } else if (valor >= 100) {
        numero = 3;
    }

    return numero;
}



    var contrasena = prompt("Ingrese la contraseña:");

    if (contrasena === 'minombre') {

        confirmar = confirm("Desea Ingresar Datos Personales?");

        if (confirmar) {

            nombre = prompt("Ingrese nombre:");
            apellido = prompt("Ingrese apellido:");
            estadoCivil = prompt("Ingrese estado civil:");
            edad = prompt("Ingrese edad:");
            fechaNacimiento = prompt("Ingrese fecha de nacimiento:");
            dni = prompt("Ingrese DNI:");

            document.write("Nombre: " + nombre + "<br>");
            document.write("Apellido: " + apellido + "<br>");
            document.write("Estado Civil: " + estadoCivil + "<br>");
            document.write("Edad: " + edad + " anios<br>");
            document.write("Fecha de Nacimiento: " + fechaNacimiento + "<br>");
            document.write("Dni: " + dni + "<br>");

            numeroEntero = prompt("Ingrese Un Numero Entero: ");
            alert(valorSeleccionado(numeroEntero));
            document.write("Numero Entero: " + valorSeleccionado(numeroEntero) + "<br>");

            alert("Sus Datos Han Sido Impresos");

        } else {

            alert("Datos No Impresos");

            numeroEntero = prompt("Ingrese Un Numero Entero: ");
            alert(valorSeleccionado(numeroEntero));
            document.write("Numero Entero: " + valorSeleccionado(numeroEntero) + "<br>");

        }
    } else {

        alert("Contraseña incorrecta");

    }


