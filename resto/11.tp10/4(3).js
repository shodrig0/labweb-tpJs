/*
Modificar el ejercicio 4-a para que solicite una confirmación 
por parte del usuario antes de mostrar su datos personales en la página.
*/



var nombre, apellido, estadoCivil, edad, fechaNacimiento, dni, confirmar;

confirmar = confirm("Desea Ingresar Datos Personales?");

if (confirmar) {

    nombre = prompt("ingrese nombre: ");
    apellido = prompt("ingrese apellido: ");
    estadoCivil = prompt("ingrese estado civil: ");
    edad = prompt("ingrese edad: ");
    fechaNacimiento = prompt("ingrese fecha de nacimiento: ");
    dni = prompt("ingrese dni: ");

    document.write(nombre + "<br>");
    document.write(apellido + "<br>");
    document.write(estadoCivil + "<br>");
    document.write(edad + "<br>");
    document.write(fechaNacimiento + "<br>");
    document.write(dni + "<br>");

    alert("Sus Datos Han Sido Impresos");
}
else {
    
    alert("Datos No Impresos");
}

