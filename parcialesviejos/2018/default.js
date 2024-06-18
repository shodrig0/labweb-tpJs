function mover() {
	var top = document.getElementById("Top").value;
	var left = document.getElementById("Left").value;

	if (top >= 0 && top <= 100) {

		if (left >= 0 && left <= 400) {

			document.getElementById("cajaRoja").style.top = top + "px";
			document.getElementById("cajaRoja").style.left = left + "px";
			document.getElementById("cajaRoja").innerHTML = "posicion del Div - top:" + top + "px" + "<br/>" +
				"/ Left:" + left + "px";
		}

		else { document.getElementById("cajaRoja").innerHTML = "<p>Indices fuera de rango</p>"; }
	}
	else { document.getElementById("cajaRoja").innerHTML = "<p>Indices fuera de rango</p>" };


}

function mayor(x, y) {
	var retorno;
	if (x >= y) {
		retorno = x;
	} else {
		retorno = y;
	}
	return retorno;
}