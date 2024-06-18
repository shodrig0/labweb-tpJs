function resultado(valor) {
    var resul = document.getElementById("resultado");
    resul.value += valor + "\n";
}

// Función para sumar dos números
function suma() {
    var x, y;
    x = prompt("ingrese valor 1: ");
    y = prompt("ingrese valor 2: ");
    return parseInt(x) + parseInt(y);
}

// Función para restar dos números
function resta() {
    var x, y;
    x = prompt("ingrese valor 1: ");
    y = prompt("ingrese valor 2: ");
    return parseInt(x) - parseInt(y);
}

// Función para dividir dos números
function division() {
    var x, y;
    x = prompt("ingrese valor 1: ");
    y = prompt("ingrese valor 2: ");

    if (y === 0) {
        return "No se puede dividir por cero";
    }
    return parseInt(x) / parseInt(y);
}

// Función para multiplicar dos números
function multiplicacion() {
    var x, y;
    x = prompt("ingrese valor 1: ");
    y = prompt("ingrese valor 2: ");
    return parseInt(x) * parseInt(y);
}

// Función para calcular la potencia de x elevado a y
function potencia() {
    var x, y;
    x = prompt("ingrese valor 1: ");
    y = prompt("ingrese valor 2: ");
    return Math.pow(parseInt(x), parseInt(y));
}

// Función para calcular el cuadrado de un número
function cuadrado() {
    var x, y;
    x = prompt("ingrese un valor: ");
    return parseInt(x) * parseInt(x);
}

function mostrarSuma() {
    var sumaResultado = suma();
    resultado(sumaResultado);
}

function mostrarResta() {
    var restaResultado = resta();
    resultado(restaResultado);
}

function mostrarMultiplicacion() {
    var multiplicacionResultado = multiplicacion();
    resultado(multiplicacionResultado);
}

function mostrarDivision() {
    var divisionResultado = division();
    resultado(divisionResultado);
}

function mostrarPotencia() {
    var portenciaResultado = potencia();
    resultado(portenciaResultado);
}

function mostrarCuadrado() {
    var cuadradoResultado = cuadrado();
    resultado(cuadradoResultado);
}