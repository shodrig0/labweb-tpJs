function solicitud() {
    let rpta = prompt("Ingrese un valor")
    let valor
    if (rpta !== null && rpta !== "") {
        valor = parseInt(rpta)
    }
    return valor
}

function valorSeleccionado(valor) {

    let resultado
    if (valor < 0) {
        resultado = -1
    } else if (valor >= 0 && valor < 10) {
        resultado = 0
    } else if (valor >= 10 && valor < 50) {
        resultado = 1
    } else if (valor >= 50 && valor < 100) {
        resultado = 2
    } else if (valor >= 100) {
        resultado = 3
    } else {
        resultado = "Valor numérico incorrecto"
    }
    return resultado
}

let valor = solicitud()
let resultadOut = valorSeleccionado(valor)

document.write(resultadOut)