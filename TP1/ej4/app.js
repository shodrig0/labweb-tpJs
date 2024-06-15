function solicitudDatos() {
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let estadoCivil = prompt("Ingrese su estado civil");
  let edad = prompt("Ingrese su edad");
  let fechaNac = prompt("Ingrese su fecha de nacimiento");
  let DNI = prompt("Ingrese su DNI");

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
      fechaNac +
      "<br>" +
      "DNI: " +
      DNI
  );

  alertaBrowser();
}

solicitudDatos();

function alertaBrowser() {
  alert("Sus datos han sido impresos");
}
