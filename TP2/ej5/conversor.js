function cambioPtoD() {

    let dolarValorBlue = 1280
    let pesosIngresados = parseInt(document.getElementById('pesos').value)
    let resultado

    resultado = pesosIngresados / dolarValorBlue

    document.getElementById('resultado1').innerHTML = resultado
}

function cambioDtoP() {
    let valorPesoArg = 0.0011
    let dolaresIngresado = parseInt(document.getElementById('dolar').value)
    let resultado

    resultado = dolaresIngresado / valorPesoArg
    resultado = resultado.toFixed(2) // redondeo
    document.getElementById('resultado2').innerHTML = resultado
}