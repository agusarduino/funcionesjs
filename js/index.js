/*Practica Funciones*/

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



// Practica Objetos Literales//
// 1 //

let misDatos = {
    nombre: "Sofia",
    apellido: "Kuo",
    dni: "12345678",
    comidas_fav: ["sushi", "pasta", "alfajores"], //use un array//
}

console.log(misDatos.nombre);
console.log(misDatos.apellido);
console.log(misDatos.dni);
console.log(misDatos.comidas_fav);

// 2 //

let misDatos2 = {
    nombre: "Agustina",
    apellido: "Arduino",
    edad: 19,
    comidas_fav: ["sushi", "pasta", "alfajores"],
    saludar: function() {
        return "Hola mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años. Mi primera comida favorita es " + this.comidas_fav[0] + "."
    }
}

console.log(misDatos2.saludar());

// 3//

let auto = {
    marca: "PEUGEOT",
    modelo: "208",
    anio: 2022,
    color: "NEGRO",
    posicion: 0,
    avanzar: function(n) {
        if (n > 0) {
            this.posicion += n;
            return this.posicion;
        }
    },
    retroceder: function(n) {
        if (n > 0) {
            this.posicion -= n;
            return this.posicion ;
        }
    }
}

auto.avanzar(3);
auto.retroceder(1);
auto.avanzar(5);
console.log(auto.posicion); //para ver la posicion final del auto//

// 4 //

let nuevoAuto = {
    marca: "PEUGEOT",
    modelo: "208",
    anio: 2022,
    color: "NEGRO",
    posicion: 0,
    moverse: function(n) {
        this.posicion += n;
        return this.posicion;
    },
}

nuevoAuto.moverse(5);
nuevoAuto.moverse(-9);
console.log(nuevoAuto.posicion)

//5//

let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(Fn) {
        this.energia -= 10;
        return "Poder elegido de " + this.nombre + ": " + this.poderes[Fn] + ". Energía restante: " + this.energia;
    }
}

let Hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(Fn) {
        this.energia -= 10;
        return "Poder elegido de " + this.nombre + ": " + this.poderes[Fn] + ". Energía restante: " + this.energia;
    }
}

ironMan.getPoder(0);
Hulk.getPoder(1);
ironMan.getPoder(2);
ironMan.getPoder(3);
Hulk.getPoder(4);
ironMan.getPoder(5);

console.log(ironMan.getPoder(1));
console.log(Hulk.getPoder(0));


//Practica Bucles//

// 1 //
// a //
for (let i = 0; i <= 5; i++) {
    console.log("Practicando con el bucle for " + i);
}

// b //
for (let i = 0; i <= 10; i++) {
    console.log(`La variable i tiene el valor ${i} `);
}

// c //
for (let i = 0; i < 10; i++) {
    console.log(2 * i);
}

for (let i = 0; i < 10; i+=2) {

    console.log(2 * i);
}

for (let i = 0; i <= 50; i++) {
    console.log(5 * i);
}
for (let i = 5; i <= 250; i += 5) {
    console.log(i);
}

// d //
for (let i = 0; i <= 100; i++) {
    console.log(i);
}

// 2 //
base = 2;
resultados = [];

for (let i = 1; i <= 10; i ++) {
    resultados.push(i * base);
}

console.log(resultados);

// 3 //
ganancias = [1, 2, 3, 4, 5, 6, 7, -8, 9, -10];
suma = 0;

for (let i = 0; i < ganancias.length; i++) {
    suma += ganancias[i];
}

console.log(suma);

//  4 //
// a //
let healinglsDifficult = ['Fear', 'Drink to Get Drunk', 'Taken for Granted', 'Blow It All Away', 'Get Me', 'Im Not Important to You', 'Sober and Unkissed', 'Healing Is Difficult', 'Judge Me', 'Little Man', 'Insidiously'];

for (let i = 0; i <healinglsDifficult.length; i++) {
    console.log(healinglsDifficult[i]);
}

// b //
n = 0
for (let i = 0; i < healinglsDifficult.length; i++) {
    n += 1
    console.log(n + " " + healinglsDifficult[i]);
}

// 5 //
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]
for (let i = 0; i < got.length; i++) {
    console.log("Hola " + got[i].nombre + got[i].apellido + "criatura viajera!");
    console.log("Soy "+ got[i].nombre + got[i].apellido + " de la ciudad " + got[i].ciudad);
}

