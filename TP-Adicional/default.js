function oponentesEstatica() {

    let container = document.getElementById('divContainer')
    let msj = document.createElement('div')
    msj.innerHTML = `<h1>Cronograma Copa América</h1>
                     <h2>Fecha 2:</h2>
                     <ul></ul>`

    const paises1 = ['Argentina', 'Bolivia', 'Brasil', 'Venezuela']
    const paises2 = ['Colombia', 'CostaRica', 'Paraguay', 'Ecuador']
    let i = 0

    while (i < paises1.length && i < paises2.length) {
        let listadoPartidos = document.createElement('li')
        listadoPartidos.textContent = paises1[i] + " vs " + paises2[i]
        msj.appendChild(listadoPartidos)
        i++
    }
    container.appendChild(msj)
}

oponentesEstatica()

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

document.write(`<br><br> Ejercicio verdadero:<br>`)

document.write(oponentes('Argentina'))
document.write(oponentes('Bolivia'))
document.write(oponentes('Brasil'))
document.write(oponentes('Venezuela'))
document.write(oponentes('Chile'))