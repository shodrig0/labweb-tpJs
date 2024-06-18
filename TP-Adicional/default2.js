console.log('Buto')

function oponentes(P) {

    const paises1 = ['Argentina', 'Bolivia', 'Brasil', 'Venezuela']
    const paises2 = ['Colombia', 'CostaRica', 'Paraguay', 'Ecuador']

    let i = 0
    let paisRival = 'Sin rival'

    while (i < paises2.length) {
        if (paises1[i] === P) {
            paisRival = paises2[i]
        }
        i++
    }
    return paisRival
}

function buscarOponentes() {

    let paisSeleccionado = document.getElementById('paises').value

    let oponente = oponentes(paisSeleccionado)

    let msjDiv = document.getElementById('mensaje')

    if (oponente) {
        let mensajeFinal = `El oponente a ${paisSeleccionado} en la 2da fecha es: ${oponente}`
        msjDiv.innerHTML = mensajeFinal
    } else {
        let mensajeFinal = `No se encontró oponente`
        msjDiv.innerHTML = mensajeFinal
    }
}