/*
        mostrarPesoDolar()

        mostrarDolarPeso()

        mostrarPesoReal()

        mostrarRealPeso()

        mostrarPesoEuro()

        mostrarEuroPeso()
*/
function resultado(valor) {
    var resultadoConversion = document.getElementById("conversor");
    resultadoConversion.value += "El resultado es: $" + valor + " USS\n";
}

function mostrarPesoDolar() {
    var x, valorPeso, dolarresultado;
    valorPeso = 0.0011;
    x = prompt("Ingrese Pesos: ");

    dolarresultado = (parseInt(x) * valorPeso);
    
    resultado(parseInt(dolarresultado));
    
}

function mostrarDolarPeso() {
    var x, valorDolar, dolarresultado;
    valorDolar = 895;
    x = prompt("Ingrese Dolares: ");

    dolarresultado = (parseInt(x) * valorDolar);
    
    resultado(parseInt(dolarresultado));
    
}

function mostrarPesoReal() {
    var x, valorReal, resultadoCon;
    valorReal = 0.0059;
    x = prompt("Ingrese Pesos: ");

    resultadoCon = (parseInt(x) * valorReal);
    
    resultado(parseInt(resultadoCon));
    
}

function mostrarRealPeso() {
    var x, valorReal, resultadoCon;
    valorReal = 170;
    x = prompt("Ingrese Pesos: ");

    resultadoCon = (parseInt(x) * valorReal);
    
    resultado(parseInt(resultadoCon));
    
}

function mostrarPesoEuro() {
    var x, valorEuro, resultadoCon;
    valorEuro = 0.0010;
    x = prompt("Ingrese Pesos: ");

    resultadoCon = (parseInt(x) * valorEuro);
    
    resultado(parseInt(resultadoCon));
    
}

function mostrarEuroPeso() {
    var x, valorEuro, resultadoCon;
    valorEuro = 975;
    x = prompt("Ingrese Pesos: ");

    resultadoCon = (parseInt(x) * valorEuro);
    
    resultado(parseInt(resultadoCon));
    mostrarEuroPeso
}
