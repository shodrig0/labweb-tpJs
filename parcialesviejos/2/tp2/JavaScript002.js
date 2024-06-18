document.write(`ejercicio 2.a`)
function sumar() {
    let x = parseInt(document.getElementById('x').value);
    let y = parseInt(document.getElementById('y').value);
    let resultado
    resultado = x + y
    console.log(x, y, resultado)
    document.getElementById("result").innerText = `Resultado: ${resultado}`;
}
function restar() {
    let x = document.getElementById(`x`).value;
    let y = document.getElementById(`y`).value;
    let resultado
    resultado = x - y;
    document.getElementById(`result`).innerText = `${resultado}`
}
function dividir() {
    let x = document.getElementById(`x`).value;
    let y = document.getElementById(`y`).value;
    let resultado
    resultado = x / y
    document.getElementById(`result`).innerText = `${resultado}`
}
function multiplicar() {
    let x = document.getElementById(`x`).value;
    let y = document.getElementById(`y`).value;
    let resultado
    resultado = x * y
    document.getElementById(`result`).innerText = `${resultado}`

}
let operacionSeleccionada; // Definir la variable fuera de la función

document.getElementById('operacion').addEventListener('change', function() {
    operacionSeleccionada = this.value; // Actualizar la variable cuando cambie la selección
});

function TransportarMoneda() {
    let monto = document.getElementById('monto').value;
    let e_valorRef = document.getElementById('valor_Ref');
    let valor_Ref = 0;
    let e_resultado = document.getElementById("result");
    console.log(operacionSeleccionada);

    if (operacionSeleccionada === "ps_Ds") { // Asegúrate de que el valor aquí coincida con el valor del `<select>`
        valor_Ref = 1000;
        monto = monto / valor_Ref;
        e_valorRef.innerText = valor_Ref + " Dolares";
        e_resultado.innerText = monto + " Dolares";
    }
    // Agrega más condiciones 'if' para otras operaciones si es necesario
}