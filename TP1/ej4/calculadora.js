function operacion() {
  let a = prompt("Ingrese priemr numero")
  let b = prompt("Ingrese segundo numero")

  alert(`
  La suma es de: ${+a + +b}
  La resta es de: ${+a - +b}
  La multiplicación es de: ${+a * +b}
  La división es de: ${+a / +b}`)
}

operacion()
