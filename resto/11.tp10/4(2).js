/* Hacer una página web con código javascript que le pida al usuario 
dos números y muestre en pantalla el resultado de la 
suma, resta, multiplicación y división.*/

var numero1;
var numero2;
var suma;
var resta;
var multiplicacion;
var division;

numero1 = prompt("ingrese un numero para el 1er valor: ");
numero2 = prompt("ingrese un numero para el 2do valor: ");

suma = parseInt(numero1) + parseInt(numero2);
resta = parseInt(numero1) - parseInt(numero2);
multiplicacion = parseInt(numero1) * parseInt(numero2);
division = parseInt(numero1) / parseInt(numero2);

alert("suma entre " + numero1 + " y " + numero2 + " es: " + suma);
alert("resta entre " + numero1 + " y " + numero2 + " es: " + resta);
alert("multiplicacion entre " + numero1 + " y " + numero2 + " es: " +  multiplicacion);
alert("division entre " + numero1 + " y " + numero2 + " es: " + division);

alert("FIN");

/*var n = 1;
//String
var s = "5";
var suma= s + n; //"51"
document.write('suma=s + n; : '+suma+'<br>');
suma= parseInt(s)+n; //6
document.write('suma= parseInt(s)+n; : '+suma +'<br>');*/

