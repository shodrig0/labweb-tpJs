// Array con los nombres de los meses

function buclefor() {
    var meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    // Referencia al elemento UL en el DOM
    var lista = document.getElementById('listaMeses');

    // Recorre el array con un for
    for (var i = 0; i < meses.length; i++) {

        // Creo un elemento LI por cada mes
        var li = document.createElement('li');

        // Asigno el nombre (string) del mes al elemento LI
        li.innerHTML = meses[i];

        // Añade el elemento LI al UL
        lista.appendChild(li);
    }

    // document.body.appendChild(lista); sirve cuando no hay nada en el html y le agrego
    // pero no esta bueno hacerlo (si para almcaenar informacion (array))

}

function bucleWhile() {
    var meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    // Referencia al elemento UL en el DOM
    var listaWhile = document.getElementById('listaMesesWhile');
    var i = 0;

    // Recorre el array con un for
    while (i < meses.length) {

        // Creo un elemento LI por cada mes
        var li = document.createElement('li');

        // Asigno el nombre (string) del mes al elemento LI
        li.innerHTML = meses[i];

        // Añade el elemento LI al UL
        listaWhile.appendChild(li);

        i++;
    }
}

function bucleDoWhile() {
    var meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    // Referencia al elemento UL en el DOM
    var listaDoWhile = document.getElementById('listaMesesDoWhile');
    var i = 0;

    // Recorre el array con un for
    do {

        // Creo un elemento LI por cada mes
        var li = document.createElement('li');

        // Asigno el nombre (string) del mes al elemento LI
        li.innerHTML = meses[i];

        // Añade el elemento LI al UL
        listaDoWhile.appendChild(li);

        i++;

    } while (i < meses.length)
}

function listaMesesForIn() {

    var listaForIn = document.getElementById('listaMesesForIn');

    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    for (mes in meses) {        

        // Creo un elemento LI por cada mes
        var li = document.createElement('li');

        // Asigno el nombre (string) del mes al elemento LI
        li.innerHTML = meses[mes];

        // Añade el elemento LI al UL
        listaForIn.appendChild(li);
    }

}

