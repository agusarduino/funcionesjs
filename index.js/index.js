/* 1 */
function rectangulo(altura, ancho) {
    return altura * ancho;
}
console.log(rectangulo(5, 20))

/* 2 */
function triangulo(base, altura){
    return base * altura/2
}
console.log(triangulo(3, 6));

/* 3 */
function largoDelArray(array){
    return array.length;
}
console.log(largoDelArray([1, 2, 3, 4, 5]));

/* 4 */
function cantidadDeLetras(palabra){
    return palabra.length;
}
console.log(cantidadDeLetras("flotar"))

/* 5 */
function dolarHoy(pesos){
    const tasaCambio = 100; 
    return pesos / tasaCambio;
}
console.log(dolarHoy(500));

/* 6 */
function precioFinal(precio){
    const iva = 0.21
    return precio * (1 + iva);
}
console.log(precioFinal(100))

/* 7 */
function mitad(precio){
    return precio/2;
}
console.log(mitad(10))

/* 8 */
function diaSegunNumero(array, numero){
    const diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    if (numero >= 1 & numero <= 7) {
        return diasSemana[numero - 1];
    } else {
        return "Número fuera de rango. Debe ser un número del 1 al 7.";
    }
}

/* 9a */
function calculadora(num1, num2, operacion){
    switch (operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: división por cero.";
            }
        default:
            return "Operación no válida.";
}
}
console.log(calculadora(5, 3, "+"));

/* 9b */
function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Error: división por cero.";
    }
}
console.log(sumar(5, 3)); 

/* Ejecutando funciones */
function siguiente(numero) {
    return numero + 1;
  }
  
  function doble(numero) {
    return 2 * numero;
  }
  
  function siguienteDelDoble(numero) {
     return siguiente(doble(numero));
  }
  


function menor(num){
    return num - 1;
  }
console.log(menor(5))


function triple(num){
    return num * 3;
  }
console.log(triple(5));


function anteriorDelTriple(num){
    return triple(num) - 1;
}
console.log(anteriorDelTriple(5))
