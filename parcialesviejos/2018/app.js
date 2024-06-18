/*function mover() {
    let caja = document.getElementById('cajaRoja')
    let top = document.getElementById('Top').value
    let left = document.getElementById('Left').value

    if (top >= 0 && top <= 100) {
        if (left >= 0 && left <= 400) {
            caja.style.top = top + "px"
            caja.style.left = left + "px"
            caja.innerHTML = `Posición del div - Top: ${caja.style.top} y Left: ${caja.style.left}`
        } else {
            caja.innerHTML = "Indices fuera del rango"
        }
    } else {
        caja.innerHTML = "Indices fuera del rango"
    }
}*/

function mover() {
    let caja = document.getElementById('cajaRoja')
    let top = document.getElementById('Top').value
    let left = document.getElementById('Left').value

    if (top >= 0 && top <= 100) {
        caja.style.top = top + "px"
    } if (left >= 0 && left <= 400) {
        caja.style.left = left + "px"
        caja.innerHTML = `Posición del div - Top: ${caja.style.top} y Left: ${caja.style.left}`
    }
}

/*let num1 = document.getElementById('Numero1')
let num2 = document.getElementById('Numero2')*/

function mayor(x, y) {
    let numMayor

    if (x < y) {
        numMayor = y
    } else if (x > y) {
        numMayor = x
    } else if (x === y) {
        numMayor = y // tambien puede ser x
    }
    return numMayor
}

let n1 = 31
let n2 = 31

console.log(mayor(n1, n2))