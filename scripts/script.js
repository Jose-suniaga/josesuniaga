
/*
function mostrarMenu() {
    let opcion = prompt(
        "ELIGA UN EJERCICIO (1-11):\n" +
        "1. Sueldo y comisiones\n" +
        "2. Calificación final\n" +
        "3. Tiempo de llegada\n" +
        "4. Nota de examen (20 preguntas)\n" +
        "5. Ganancia en 30 días\n" +
        "6. Conversión de Km\n" +
        "7. Volumen de Cilindro\n" +
        "8. Porcentaje Hombres/Mujeres\n" +
        "9. Área/Perímetro Rectángulo\n" +
        "10. Total compra (Azúcar, Café, Aceite)\n" +
        "11. Evaluar Polinomio\n" +
        "0. Salir"
    );
    
    switch (opcion) {
        case "1": problema1(); break;
        case "2": problema2(); break;
        case "3": problema3(); break;
        case "4": problema4(); break;
        case "5": problema5(); break;
        case "6": problema6(); break;
        case "7": problema7(); break;
        case "8": problema8(); break;
        case "9": problema9(); break;
        case "10": problema10(); break;
        case "11": problema11(); break;
        case "0": alert("Saliendo..."); break;
        default: alert("Opción no válida"); break;
    }
}

// --- FUNCIONES DE LOS EJERCICIOS ---

function problema1() {
    let sueldoBase = parseFloat(prompt("Ingrese sueldo base:"));
    let v1 = parseFloat(prompt("Venta 1:"));
    let v2 = parseFloat(prompt("Venta 2:"));
    let v3 = parseFloat(prompt("Venta 3:"));
    
    let totalVentas = v1 + v2 + v3;
    let comision = totalVentas * 0.10;
    let totalMes = sueldoBase + comision;
    
    alert("Dinero por comisiones: " + comision + "\nTotal a recibir: " + totalMes);
}

function problema2() {
    let p1 = parseFloat(prompt("Parcial 1:"));
    let p2 = parseFloat(prompt("Parcial 2:"));
    let p3 = parseFloat(prompt("Parcial 3:"));
    let examen = parseFloat(prompt("Examen Final:"));
    let trabajo = parseFloat(prompt("Trabajo Final:"));
    
    let promedioParciales = (p1 + p2 + p3) / 3;
    let notaFinal = (promedioParciales * 0.55) + (examen * 0.30) + (trabajo * 0.15);
    
    alert("La calificación final es: " + notaFinal.toFixed(2));
}

function problema3() {
    let hh = parseInt(prompt("Hora de salida (HH):"));
    let mm = parseInt(prompt("Minutos de salida (MM):"));
    let ss = parseInt(prompt("Segundos de salida (SS):"));
    let t = parseInt(prompt("Tiempo de viaje en segundos:"));
    
    let totalSegundosInicio = (hh * 3600) + (mm * 60) + ss;
    let totalSegundosLlegada = totalSegundosInicio + t;
    
    let horaLlegada = Math.floor(totalSegundosLlegada / 3600) % 24;
    let minLlegada = Math.floor((totalSegundosLlegada % 3600) / 60);
    let segLlegada = totalSegundosLlegada % 60;
    
    alert("Llegará a las: " + horaLlegada + ":" + minLlegada + ":" + segLlegada);
}

function problema4() {
    
    let correctas = 11;
    let incorrectas = 7;
    let blanco = 2;
    let nota = (correctas * 5) + (incorrectas * -1) + (blanco * 0);
    alert("La nota definitiva es: " + nota);
}

function problema5() {
    let horasDia = parseFloat(prompt("Horas trabajadas al día:"));
    let pagoHora = parseFloat(prompt("Pago por hora:"));
    
    let gana30Dias = (horasDia * pagoHora) * 30;
    alert("En 30 días ganará: " + gana30Dias);
}

function problema6() {
    let km = parseFloat(prompt("Ingrese kilómetros:"));
    alert(
        "Hectómetros: " + (km * 10) + "\n" +
        "Decámetros: " + (km * 100) + "\n" +
        "Metros: " + (km * 1000) + "\n" +
        "Decímetros: " + (km * 10000) + "\n" +
        "Centímetros: " + (km * 100000) + "\n" +
        "Milímetros: " + (km * 1000000)
    );
}

function problema7() {
    let r = parseFloat(prompt("Radio (r):"));
    let h = parseFloat(prompt("Altura (h):"));
    let pi = 3.14;
    
    let volumen = pi * (r * r) * h;
    alert("El volumen del cilindro es: " + volumen);
}

function problema8() {
    let hombres = parseInt(prompt("Número de hombres:"));
    let mujeres = parseInt(prompt("Número de mujeres:"));
    let total = hombres + mujeres;
    
    let porcH = (hombres / total) * 100;
    let porcM = (mujeres / total) * 100;
    
    alert("Porcentaje Hombres: " + porcH.toFixed(2) + "%\nPorcentaje Mujeres: " + porcM.toFixed(2) + "%");
}

function problema9() {
    let base = parseFloat(prompt("Base del rectángulo:"));
    let altura = parseFloat(prompt("Altura del rectángulo:"));
    
    let area = base * altura;
    let perimetro = 2 * (base + altura);
    
    alert("Área: " + area + "\nPerímetro: " + perimetro);
}

function problema10() {
    
    let total = (1000 * 4) + (3200 * 2) + (2200 * 7);
    alert("El pago total de la compra es: " + total);
}

function problema11() {
    
    let a = 7, b = 8, c = -9, x = 10;
    let resultado = (a * Math.pow(x, 5)) + (b * Math.pow(x, 3)) + (c * Math.pow(x, 2)) + 9;
    alert("El resultado de p(10) es: " + resultado);
}

// Ejecutar el menú al cargar
mostrarMenu();
*/

/*
let hh = 10;
let mm = 30;
let ss = 25;
let t = 3600;
let total = hh * 3600 + mm * 60 + ss;

total = total + t;

let hf = Math.floor(total / 3600);
let mf = Math.floor((total % 3600) / 60);
let sf = total % 60;

console.log("Hora de llegada: " + hf + ":" + mf + ":" + sf);
*/

/*
function guiaDeEjercicios18(n) {
    let m = "";
    
    if (n === 100) {
        m += "Puntaje Perfecto! ";
    }
    if (n >= 90) {
        m += "Excelente";
    }
    console.log(m);
}

guiaDeEjercicios18(100);
*/

/*
function guiaDeEjercicios17(numero) {
    console.log("Tabla del 5:");
    for (let i = 1; i <= 10; i++) {
        let resultado = 5 * i;
        console.log("5 x " + i + " = " + resultado);
    }
}

guiaDeEjercicios17();
*/

/*
function guiaDeEjercicios16() {
    let res = [];
    for (let i = 1; i <= 10; i++) {
        if (i === 5) continue;
        if (i === 8) break;
        
        res.push(i);
    }
    console.log("16. Bucle: " + res.join(", "));
}

guiaDeEjercicios16(); 
*/

/*
class Alumnos {
    constructor(nombre, apellido, fechaNac, genero, cedula, direccion, correo, telefono, anioIngreso, carrera)
    { this.nombre="José";
    this.apellido="Suniaga";
    this.fechaNac="20/03/2003";
    this.genero="masculino";
    this.cedula="28.702.039";
    this.direccion="Guanta";
    this.correo="Josesuniaga200@gmail.com";
    this.telefono="04148091718";
    this.anioIngreso="2022";
    this.carrera="Ingeniero_Informatica";
    }
    materiasAprobada(){
        
        return this.nombre +" paso ninguna";
    }
}





const carlos = new Alumnos("José");

console.log(carlos.materiasAprobada());
*/

/*
let alumno={
    nombre:"José",
    apellido:"Suniaga",
    genero:"masculino",
    cedula:"28.702.039",
    fecha_nac:"20/03/2003",
    direccion:"Guanta_metoquina1",
    correo:"josesuniaga200@gmail.com",
    anio_ingreso:"05/03/2026",
    carrera:"informatica",
};

console.log(alumno.nombre + " " + alumno.apellido + 
" nació el " + alumno.fecha_nac + 
" y estudia " + alumno.carrera);
*/

/*
let equipos = {nombre: "caribes", campeonato: 2000, manager: "luis"};

console.log("El equipo " + equipos.nombre + 
" ganó en el año " + equipos.campeonato + 
" y su manager es " + equipos.manager);

let arrays = [["caribes", "lara", "zulia", "bravos"],[2000, 2001, 2002, 2003],["2005 caribes", "2007 lara", "2010 bravos", "2011 zulia"]
];
*/

/*
let array = [[1, 2, 3, 4, 5], ["a","b","c","d"]];

console.log(array[0][2])
*/

/*
let x = 5;
let cuadrado = x * x;
let ultimoDigito = cuadrado % 10;
let coinciden = (x === ultimoDigito);

console.log("¿El cuadrado de " + x + " termina en " + x + "?: " + coinciden);
*/

/*
let X = 10;
let Y = 25;

console.log("Valores iniciales: X = " + X + ", Y = " + Y);

let auxiliar = X; 

X = Y;
Y = auxiliar;

console.log("Valores intercambiados: X = " + X + ", Y = " + Y);
*/

/*
let velocidadKm = 100;
let velocidadMillas = velocidadKm / 1.6;

console.log(velocidadKm + " km/h equivalen a " + velocidadMillas + " mph");
*/

/*
let numNegativo = -15;
let numPositivo = Math.abs(numNegativo);

console.log("Resultado: " + numPositivo); // 15
*/

/*
for (let i = 1; i <= 20000; i++) 
*/

/*
let edad1 = 10, edad2 = 12, edad3 = 8;
let suma = edad1 + edad2 + edad3;
let promedio = suma / 3;
let max = Math.max(edad1, edad2, edad3);
let min = Math.min(edad1, edad2, edad3);

console.log("Suma: " + suma);
console.log("Promedio: " + promedio.toFixed(2));
console.log("Máxima: " + max + ", Mínima: " + min);
*/

/*
let numero = 50;
let esPar = (numero % 2 === 0);

console.log("¿Es par?: " + esPar);
*/

/*
let varUno = 10;
let varDos = 30;

console.log("Antes: varUno = " + varUno + ", varDos = " + varDos);

let auxiliar = varUno; 

varUno = varDos;
varDos = auxiliar;

console.log("Al final: varUno = " + varUno + ", varDos = " + varDos);
*/

/*
let papas = comensales * 200; // gramos
let huevos = comensales * 1;   
let cebolla = comensales * 60; // gramos

console.log("Para " + comensales + " comensales se necesitará:");
console.log((papas / 1000) + " kg de papas"); // Convierte a kg
console.log(huevos + " huevos");
console.log(cebolla + " gr de cebolla");
*/

/*
let numero = 45;
let decenas = Math.floor(numero / 10);
let unidades = numero % 10; 

console.log("Unidades: " + unidades); // 5
console.log("Decenas: " + decenas);   // 4
*/

/*
let horas = 2;
let minutos = 30;
let SegundosTotales = (horas * 60 * 60) + (minutos * 60);

console.log("Resultado: " + SegundosTotales + " segundos");
*/

/*
let litros = 20;
let kilometros = 80;
let consumo = (litros / kilometros);
console.log("Has consumido " + consumo + " l/km");
*/

/*
let nombre = prompt("Escribe tu nombre");
console.log("Hola" + nombre);
*/

/*
let lado = 40;
let area = lado * lado;
let perimetro = lado * 4;

console.log("El área es: " + area);
console.log("El perímetro es: " + perimetro);
*/

/*
let precio = 200;
let iva = 16;
let PrecioIva = (precio * iva) / 100;
let preciototal = precio + PrecioIva;
console.log("el total de la compra es:" + preciototal + "bs");
*/

/*
let precio = 200;
let iva = 16;
let PrecioIva = (precio * iva) / 100;
let preciototal = precio + PrecioIva;
console.log("el total de la compra es:" + preciototal + "bs");
*/