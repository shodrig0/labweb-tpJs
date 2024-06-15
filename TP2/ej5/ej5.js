function suma(a, b) {
    let resultado = a + b
    return resultado
}

function resta(a, b) {
    let resultado = a - b
    return resultado
}

function multiplicar(a, b) {
    let resultado = a * b
    return resultado
}

function division(a, b) {
    let resultado
    if (b > 0) {
        resultado = a / b
    } else {
        resultado = "error"
    }
    return resultado
}

function potencia(a, b) {
    let resultado = a ** b
    return resultado
}

function raizCuadrada(a) {
    let resultado
    if (a > 0) {
        resultado = Math.sqrt(a)
    } else {
        resultado = "error"
    }
    return resultado
}

const operaciones = ["suma", "resta", "multiplicacion", "division", "potencia", "raiz"]

operaciones.forEach(operacion => {
    document.getElementById(operacion).addEventListener('click', () => solicitud(operacion))
})

function solicitud(op) {

    let numA = parseInt(prompt("Ingrese primer numero:"))
    let numB = op !== "raiz" ? parseInt(prompt("Ingrese segundo numero:")) : null
    let resultado

    switch (op) {
        case "suma":
            resultado = suma(numA, numB)
            break
        case "resta":
            resultado = resta(numA, numB)
            break
        case "multiplicacion":
            resultado = multiplicar(numA, numB)
            break
        case "division":
            resultado = division(numA, numB)
            break
        case "potencia":
            resultado = potencia(numA, numB)
            break
        case "raiz":
            resultado = raizCuadrada(numA)
            break
    }

    let txtArea = document.getElementById("resultado")
    let txtI = txtArea.value
    txtArea.value = txtI + `${resultado}\n`


    console.log(resultado)
}

