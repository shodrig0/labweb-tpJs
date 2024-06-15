/*function iteracionArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
  }
}*/

// es un obj no un array
let obj = {
  Nombre: "Juan",
  Apellido: "Pérez",
  EstadoCivil: "soltero",
  edad: 44,
  FechadeNacimiento: "1/1/1980",
  DNI: 33333333,
};

// iteracionArray(arrayB);

// array
let arrayB = ["Juan", "Pérez", "soltero", 44, "1/1/1980", 33333333];
document.write("Nombre: " + arrayB[0] + "<br>");
document.write("Apellido" + arrayB[1] + "<br>");
document.write("Estado Civil: " + arrayB[2] + "<br>");
document.write("Edad: " + arrayB[3] + "<br>");
document.write("Fecha de Nacimiento: " + arrayB[4] + "<br>");
document.write("DNI: " + arrayB[5] + "<br>");
