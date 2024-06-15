function ulListFor() {
    let container = document.getElementById('container')
    let lista = document.createElement('div')
    lista.innerHTML = `<h2>Meses iterados FOR:</h2>
                       <ul></ul>`

    let colMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    for (let i = 0; i < colMeses.length; i++) {
        let listaMeses = document.createElement('li')
        listaMeses.textContent = colMeses[i]
        lista.appendChild(listaMeses)
    }
    container.appendChild(lista)
}

function ulListForIn() {
    let container = document.getElementById('container')
    let lista = document.createElement('div')
    lista.innerHTML = `<h2>Meses iterados FOR IN:</h2>
                       <ul></ul>`

    const colMeses = { 1: 'Enero', 2: 'Febrero', 3: 'Marzo', 4: 'Abril', 5: 'Mayo', 6: 'Junio', 7: 'Julio', 8: 'Agosto', 9: 'Septiembre', 10: 'Octubre', 11: 'Noviembre', 12: 'Diciembre' }

    for (const prop in colMeses) {
        if (colMeses.hasOwnProperty(prop)) {
            let listaMeses = document.createElement('li')
            listaMeses.textContent = colMeses[prop]
            lista.appendChild(listaMeses)
        }
    }
    container.appendChild(lista)
}

function ulListWhile() {
    let container = document.getElementById('container')
    let lista = document.createElement('div')
    lista.innerHTML = `<h2>Meses iterados WHILE:</h2>
                       <ul></ul>`

    let colMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    let i = 0

    while (i < colMeses.length) {
        let listaMeses = document.createElement('li')
        listaMeses.textContent = colMeses[i]
        lista.appendChild(listaMeses)
        i++
    }
    container.appendChild(lista)
}

function ulListDoWhile() {
    let container = document.getElementById('container')
    let lista = document.createElement('div')
    lista.innerHTML = `<h2>Meses iterados DO WHILE:</h2>
                       <ul></ul>`

    let colMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    let i = 0

    do {
        let listaMeses = document.createElement('li')
        listaMeses.textContent = colMeses[i]
        lista.appendChild(listaMeses)
        i++
    } while (i < colMeses.length)
    container.appendChild(lista)
}

ulListFor()
ulListForIn()
ulListWhile()
ulListDoWhile()