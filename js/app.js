
/*
Ejercicio con If
---------------------
. Ingresan dos números
1- Si el primero es mayor que el segundo mostrar en consola
 la suma de ambos

2- Si el primero es menor que el segundo mostrar en consola
 la resta del segundo menos el primero.

3 - Si son iguales mostrar en consola la multiplicación de ambos.
ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es
igual a 3
*/


/*
TAREA 1 REALIZADA

let numero1 = 5059
let numero2 = 50590

if (numero1 > numero2) {
    console.log(`la suma de ${numero1} con ${numero2} es = ${numero1 + numero2}`)
} else if(numero1 < numero2) {
    console.log(`la resta de ${numero1} con ${numero2} es = ${ numero2 - numero1}`)
} else {
    console.log(`los numeros son iguales, por lo tanto el resultado
    de la multiplicacion es ${numero1 * numero2}`)
}  
*/


/*
TAREA DOS REALIZADA

Ejercicio con Condicionales
Recibir dos valores y la operación a realizar (+, -, *, /)
1- Verificar que los valores ingresados no sean NaN, si son NaN devolver un mensaje de error.

2- Con una estructura switch verificar la operación y devolver un mensaje con el
resultado de la misma.

3- Si se ingresa una operación que no está contemplada devolver un mensaje
de error.
*/


/*
let valor1= 56
let valor2= 673
let resultado= prompt("Escriba la palabra suma,resta,multiplicacion o division. Para realizar la operacion")

if (isNaN(valor1 || valor2)) {
    console.error("error")
}
 else{
    switch (resultado) {
        case "suma": console.log(`esto es una suma entre ${valor1} y ${valor2} =  ${valor1 + valor2}`);
            
            break;
    
        case "resta": console.log(`es una resta entre ${valor1} y ${valor2} = ${valor1 -  valor2 }`)
    
             break;
    
        case "multiplicacion": console.log(`esto es una multiplicacion entre ${valor1} y ${valor2} = ${valor1 * valor2}`)     
              
             break;
    
        case "division": console.log(`esto es una division entre ${valor1} y ${valor2} =  ${valor1 / valor2}`)
    
            break;
    
        default:
            console.error("operacion no valida")
            break;
    }
}
*/




//EJERCICIOS DE CONDICIONALES
 
/*
EJERCICIO 1: Realizado con exito

Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:

1- En caso afirmativo el usuario responderá si
2- En caso contrario responderá no.
3- Si el usuario responde si se escribirá por el documento «irás a la cárcel».

Si el usuario responde no se escribirá por el documento web «irás a casa».

En cualquier caso en el documento web se escribirá «la documentación por favor».


let usuario= prompt("Es culpable?")




if (usuario === "si") {
    console.log("iras a la carcel")
}
 else if(usuario === "no"){
    console.log("iras a casa")
   
} else{
    console.log("la documentacion por favor")
}
*/


/*
ENUNCIADO EJERCICIO 2
Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de 
comida rápida cuanto le costará en función del topping que elija.

El helado sin topping cuesta 1.90€.
El topping de oreo cuesta 1€.
El topping de KitKat cuesta 1.50€.
El topping de brownie cuesta 0.75€.
El topping de lacasitos cuesta 0.95€.
En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla 
«no tenemos este topping, lo sentimos. » y a continuación informar del precio del helado sin ningún topping.
Finalmente, el programa escribe por pantalla el precio del helado con el topping seleccionado (o ninguno).
*/

/*
EJERCICIO DOS: HECHO 

let topping = prompt("escriba aqui que topping desearia comprar, o si desea sin topping")
let helado= 1.90
let precio= 0.00


if (topping=== "sin topping") {
    precio=1.90
    console.log("el helado sin toping cuesta =",helado)
}
 else if(topping==="topping de oreo") {
    precio=1

    console.log("el topping de oreo cuesta", precio)
    console.log("el valor total del helado con el topping de oreo es", helado + precio)
}
else if(topping==="topping de KitKat"){
precio=1.50

    console.log("el topping de kitkat cuesta", precio)
    console.log("el valor total del helado con el topping de kitkat es = ", helado + precio)
}
else if(topping==="topping de brownie"){
      precio=0.75

    console.log("el topping de brownie cuesta", precio)
    console.log("el valor total del helado con el topping de brownie es = ", helado + precio)
}
else if(topping==="topping de lacasitos"){
   precio=0.95

   console.log("el topping de lacasitos cuesta", precio)
    console.log("el valor total del helado con el topping de brownie es = ", helado + precio)
} else{
    console.log("No tenemos este topping, lo sentimos.")
    console.log("el precio del helado sin ningun topping es de", helado)
}
*/



//EJERCICIO 

/*
Crear un string que sea la respuesta de alguna pregunta
1- Si la respuesta es si, imprimiremos: nos ha respondido si

2- Si la respuesta es no, imprimiremos: nos ha dicho que no

3- Si la persona ha respondido otra cosa, imprimiremos: no se ha entendido la respuesta


let respuesta=prompt("quiere ir al cine conmigo? Diga si o no")

if (respuesta==="si") {
    console.log("nos ha respondido si")
} else if (respuesta==="no") {
    console.log("nos ha respondido que no")
} else{
     console.log("no se ha entendido la respuesta")
}
*/



/*
EJERCICIO 2
-------------
1- CREAR DOS VARIABLES, UNA STRING(NOMBRE) Y OTRA NUMERO (CANTIDAD)
-REFRESCO 1 EURO
-CERVEZA 2.20
-PATATA 5.00
SEGUN LA CANTIDAD Y EL NOMBRE DEL PRODUCTO VAMOS A TENER QUE CALCULAR EL PRECIO TOTAL DEL PEDIDO
*/

/*
let nombre = prompt("ingrese que va a consumir")
let cantidad = 3

if (nombre === "refresco") {
    console.log(1 * cantidad  )
} else if(nombre === "cerveza") {
    console.log( 2.20 * cantidad)
} else if(nombre === "patata"){
    console.log( 5.00 * cantidad)
} else{
    console.log("producto no disponible")
}
*/


/*
EJERCICIO
-----------

CREAR UNA CALCULADORA PARA COMPROBAR SI UN AÑO ES BISIESTO O NO. LAS CONDICIONES A CUMPLIR DE UN AÑO BISISESTO 
SON QUE :
- ES DIVISIBLE POR 4
- NO ES DIVISIBLE POR 100 O ES DIVISIBLE POR 400
  FINALMENTE MOSTRAR POR PANTALLA SI ES BISIESTO O NO LO ES
*/

/*
let bisiesto = 1900

if ((bisiesto  % 4 )== 0) {
     
    let divisiblePor100 = (bisiesto % 100)== 0    
    let divisiblePor400 = (bisiesto % 400)== 0
    
    if(!divisiblePor100 && divisiblePor400){

        console.log("es bisisesto")
    }

} else {
    console.log("no es bisiesto")
}
*/


/*
EJERCICIO: realizado casi sin problemas, del 1 al 10 costo un 7 
-----------

DADAS DOS VARIABLES ESSOCIO (BULEANO) Y TIKET (NUMBER), CALCULA EL PRECIO FINAL DEL TICKET EN UN SUPERMERCADO
QUE TIENE LAS SIGUIENTES OFERTAS, SI ES SOCIO:
1 EURO GRATIS A PARTIR DE 25 EUROS 
5% DE DESCUENTO A PARTIR DE 50 EUROS
15 EUROS GRATIS A PARTIR DE 100 EUROS

SI NO SON SOCIOS:
5 EUROS GRATIS A PARTIR DE 100 EUROS GASTADOS



let esSocio = true
let ticket = 151


if (ticket >= 25 && ticket < 50 && esSocio) {
    let descuento = ticket - 1
    console.log("tiene un euro de descuento, en total seria =", descuento)
} else if(ticket >= 50 && ticket < 100 && esSocio) {
      let descuento = ticket * 0.95
      console.log("tiene 5% de descuento, en total seria =", descuento)
}else if(ticket >= 100 &&  esSocio){
    let descuento = ticket - 15
    console.log("tiene 15 euros de descuento, en total es =", descuento)
} else if(ticket >= 100 && !esSocio){
    let descuento = ticket - 5
    console.log("tiene 5 euros de descuento, en total es =", descuento) 
} else{
    console.log("no tiene descuento, el precio a pagar es =", ticket)
}
*/






// Bucles

// for

//let river = ["armani","montiel","maidana","pinola","casco","ponzio"]

//for(let numerito = 0 ; numerito < river.length ; numerito ++ ){
  //   console.log(river[numerito])
//}

// While

/*
let i = 0

w hile(i < 20){
    i++
  console.log(i)
}
*/
/*
let i = 0
let deportes = ["futbol","rugby","tenis","padel"]

while (i < deportes.length ) {
    deportes.push("deporte" );
    i++
    console.log(deportes)
}
*/
 

/*
-------------------------EJERCICIO 1-----------------------------------

1- Escribir un programa que solicite la edad y si es mayor de 18 años 
mostrar un mensaje que ya puede conducir, si la edad ingresada no es un 
número válido indicarlo en un mensaje.
*/ //REALIZADO

/*
let edad = Number(prompt("ingrese su edad"))

if (isNaN(edad) ) {
    console.log("no es un numero valido")
} else if(edad >= 18) {
    console.log("ya puede conducir")
} else{
    console.log("no tiene edad para conducir")
}
*/
 
/*
---------------------------EJERCICIO 2------------------------------

2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar
 la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje
 de “número erróneo”. Si el número ingresado no es válido mostrar 
 el mensaje “Introduce un número válido”.
*/

/*
let nota = Number(prompt("ingrese su nota"))

if (isNaN(nota)) {
    console.error("introduce un numero valido")
}else{


switch (nota){
    
    case 0: 
    case 1: 
    case 2: 
    
    alert(" Muy deficiente")

        break;

    case 3: 
    case 4:
        
    alert(" Insuficiente")

         break;

     case 5: 
     case 6: 
     
    alert(" Suficiente")

         break;

     case 7: alert(" Bien")

        break;

     case 8: 
     case 9: 
     
     alert(" Notable")

         break;

     case 10: alert(" Sobresaliente")

     break;

    default:
        console.log("número erróneo")
        break;
}
}*/ //REALIZADO


/*
---------------------------- EJERCICIO 3 -----------------------------------

3- Realiza un script que pida cadenas de texto  hasta que se pulse
 “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas 
 concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/

/*
let cadenas = prompt("escriba aqui")
let cadenasConcatenadas = ""


while (cadenas) {
    if (cadenasConcatenadas) {
        cadenasConcatenadas = cadenasConcatenadas+" - " +cadenas

    }else{
        cadenasConcatenadas = cadenas
    }
    cadenas = prompt("escriba aqui");
}
confirm(cadenasConcatenadas)
*/ //REALIZADO 




/*
------------------------------- EJERCICIO 4 ------------------------------

4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números 
 introducidos.
*/


/*
let suma = 0

do {
    let numero = Number(prompt("ingrese un numero"))
       if (isNaN(numero)) {
        alert("ingrese un numero valido")
       } else{
        suma = suma + numero
       }
} while (confirm("desea seguir ingresando numeros"));
console.log(suma)
*/ //REALIZADO 

/*

------------------------------ EJERCICIO 5 ------------------------------------

5- Realizar una página con un script que calcule el valor de la letra de un 
número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a 
preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/

/*
let letraDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]

for (let i = 0; i < letraDni.length; i++) {
    let numeroDni = prompt("ingrese numero de dni")
    let resto = numeroDni %23
    if (numeroDni > 99999999) {
       alert("no puede ingresar mas de 8 digitos")
    } else if(resto >= 1 && resto <= 22){
        console.log(`la letra de tu DNI es ${letraDni[i]}`)
    }
    else if (isNaN(resto)){
        alert("ingrese un numero")
    }else{
        console.error("error")
    }
 
}
*/

/*
------------------------------ EJERCICIO 6 -----------------------------------

6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente
 forma :

1
22
333
4444
55555
666666
…….
*/

/*
for (let i = 1; i <= 30; i++) {
    for (let r = 0; r < i; r++) {
        console.log(i);
    }
    document.write("<br>");
}
*/
 // REALIZADO, VISTO EN YT 

/*
const sumaDeDosNumeros = function(numero1,numero2){
    
    return numero1 + numero2
}




/*

--------------------------- EJERCICIO 17 -------------------------------
 Realiza un script que muestre la posición de la primera vocal de un texto 
introducido por teclado.
*/

/*
let texto = "me llamo javier"
let posicionPrimerVocal = texto.indexOf("e")
console.log(posicion)
*/



/*
------------------------------ EJERCICIO 16 ---------------------------------

16- Realiza un script que pida una cadena de texto y la devuelva al revés.
 Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

/*
let texto = prompt("ingrese aqui el texto")

let textoReves = texto.split("").reverse().join("")

console.log(textoReves)
*/ //REALIZADO 


/*
-------------------------- EJERCICIO 14 ------------------------------------
 Realiza un script que pida una cadena de texto y lo muestre poniendo el 
 signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo 
 “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.



let texto = prompt("ingrese cadena de texto")
let resultado = texto.split("")
console.log(resultado.join("-"))
//REALIZADO 
*/




//---------------------------- EJERCICIO 11 -------------------------------

//Realiza un script que pida por teclado 3 edades y 3 nombres e indique 
//el nombre del mayor.

/*
let edad1= Number(prompt("ingrese la edad"))
let nombre1 = prompt("ingrese su nombre")

let edad2= Number(prompt("ingrese la edad"))
let nombre2 = prompt("ingrese su nombre")

let edad3= Number(prompt("ingrese la edad"))
let nombre3 = prompt("ingrese su nombre")

if (edad1 > edad2 ) {
    console.log("el nombre del mayor es",nombre1)
} else if (edad2 > edad3){
      console.log("el nombre del mayor es", nombre2)
} 
else{
    console.log("el nombre del mayor es ", nombre3)
}
*/
// REALIZADO CON ORIENTACION DE YT  

    
    













// -------------------------- EJERCICIO 12 --------------------------------

//  Realiza un script que genere un número aleatorio entre 1 y 99

 //console.log(Math.ceil(Math.random() * 100));
                       
                 // REALIZADDO

//------------------------- EJERCICIO 13--------------------------------

//Realiza un script que pida un texto y lo muestre en mayúsculas.

//let texto = prompt("ingrese texto")
//console.log(texto.toUpperCase())

                // REALIZADO


//----------------------- EJERCICIO 7 -------------------------------------
/*
Haz un script que escriba una pirámide inversa de los números del 1 al número 
que indique el usuario (no mayor de 50)  de la siguiente forma : 
(suponiendo que indica 30).
*/

/*
1. Leer dos números enteros, presentar por pantalla el promedio de ellos.


let num1 =Number(prompt("ingrese primer numero"))
let num2 = Number(prompt("ingrese segundo numero"))
let prom = (num1 + num2) /2

console.log("el promedio de los dos numeros es", prom)
*/



/*
3. Ingresar los lados de un rectángulo, presentar por pantalla su perímetro (suma de sus lados) y
su superficie (base * altura).


let lado1 = 3
let lado2 = 5
let lado3 = 3
let lado4 = 5

let perimetro = lado1 + lado2 + lado3 + lado4
let superficie = lado1 + lado2

console.log("el perimetro es", perimetro)
console.log("la superficie es", superficie)
*/



// Ingresar dos números enteros, presentar por pantalla el mayor de ellos.


/*
let numero1 = Number(prompt("ingrese un numero"))
let numero2 = Number(prompt("ingrese otro numero"))

if (numero1 > numero2) {
    console.log("el umero mayor es", numero1)
} else{
    console.log("el numero mayor es", numero2)
}
*/


/*
. Ingresar tres valores positivos, indicar si son lados de un triángulo 
equilátero (3 lados iguales). Presentar por pantalla el mensaje correspondiente.
*/    

/*
valor1 = Number(prompt("ingrese un numero"))
valor2 = Number(prompt("ingrese un segundo numero"))
valor3 = Number(prompt("por ultimo igrese un tercer numero"))


if (valor1 == valor2 && valor2 == valor3) {
    console.log("son lados de un triangulo cuadrilatero")
} else {
    console.log("No son lados de un triangulo cuadrilatero")
}
*/



/*
3. (opcional) Ingresar dos números, ordenarlos en forma ascendente y
 presentarlos por pantalla.En caso de ser iguales imprimir un mensaje que diga
  " Son Iguales".



let numero1 = Number(prompt("ingresa el primer numero puto"))
let numero2 = Number(prompt("ingresa el segundo numero cajeta por favor"))


if (numero1 < numero2) {
     console.log(numero1)
     console.log(numero2)    
} else if(numero2 < numero1){
    console.log(numero2) 
    console.log(numero1)
} else{
    console.log("Son iguales")
}
 */




/*
1. Ingresar N números, presentar por pantalla el promedio de ellos.
*/


/*
let trimestres = Number(prompt("cuantos trimestres desea promediar"))
let i = 0
let sumaNotas = 0
while (i < trimestres) {
    let nota = parseInt(prompt("ingrese la nota"))
    sumaNotas = sumaNotas + nota
    i++
}
let promedio =sumaNotas /trimestres
console.log(promedio)
*/




/*
2. Se ingresan N valores numéricos. Se desea saber cuántos son positivos, 
cuántos negativos y cuántos iguales a cero.
*/

/*
let numeros = Number(promt("cuantos numeros desea ingresar"))

let positivos = 0

i = 0
*/


//---------------------------------------------- TAREA 1 -----------------------------------------

/*
Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
Ana, Oswaldo, Raúl, Celia, María, Antonio
(vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)

Imprime la clasificación actual
El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:

Celia adelanta a Raúl
Antonio es descalificado y se elimina del concurso
Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
Hay una nueva participante que pasa a encabezar la clasificación: Marta
Imprime la clasificación actualizada y comprueba que se ha hecho correctamente
*/


/*
let calificaciones = ["Ana", "Oswaldo", "Raul", "Celia", "Maria", "Antonio"]

console.log(calificaciones.join(" "))

//console.log(calificaciones)
calificaciones.splice (2,2,"Celia","Raul")
//console.log(calificaciones)

calificaciones.pop("Antonio")
//console.log(calificaciones)

calificaciones.splice(1,0,"Roberto","Amaya")
//console.log(calificaciones)

calificaciones.unshift("Marta")
console.log(calificaciones.join(" "))
*/



//------------------------------------------ TAREA 2 -------------------------------------------------------

/*
Pedir por pantalla el nombre de 5 alumnos de la comisión.
Guardarlos en un arreglo llamado rollingCoders
Usando el arreglo mostrar en consola por cada uno un mensaje de bienvenida al mundo del desarrollo web.
*/




//Aplicación de lista de compras

/*
- Agregar un producto a la lista
- Listar los productos de la lista numerados
- Eliminar un producto de la lista por su indice
- Buscar un producto
- Filtrar productos por una letra o palabra
*/
/*
const lista = [];

//agregar un producto
const agregarProducto = () =>{
    let producto = prompt("ingrese que producto desea agregar a la lista")

    while (producto) {
        lista.push(producto.toUpperCase())
        alert("el producto se agrrego a la lista")
        producto = prompt("ingrese que producto desea agregar a la lista")
    }
    alert("finalizado el ingreso de productos")
}


//listar productos
const listarProductos = () => {
    document.body.innerHTML = ""
    document.write("<h1>")
    document.write("lista de productos")
    document.write("</h1>")
    if (lista.length > 0) {
        document.write("<ol>")
        lista.forEach((producto)=> {
        document.write("<li>")
        document.write(producto)
        document.write("</li>")
        })
        document.write("</ol>")

    } else{
        alert("se cancelo la operacion")
    }
}


//borrar producto
const borrarProducto = (producto = prompt("ingrese producto a eliminar")) => {
    if (lista.includes(producto)) {
        let posicion= lista.indexOf(producto.toUpperCase())
        lista.splice(posicion, 1)   
        confirm("seguro desea eliminar el producto?")
        if (confirm) {
            alert("el producto se a eliminado correctamente")
        } 
    } 
     else {
        alert("el producto no se encuentra en la lista")
    }
};

//Buscar un producto
const buscarProducto = (producto = prompt("que producto desea buscar")) => {
if (producto) {
    let encontrado = lista.includes(producto.toUpperCase())
    if (encontrado) {
        console.log(`el producto ${producto} esta en la lista`)
    } else {
        console.log(`el producto ${producto} no esta en la lista`)
    }
   
    
} else {
    alert("se cancelo la operacion")
}
};

//filtrar productos
const filtrarProductos = (termino = prompt("ingrese que termino filtrar")) => {
    if (termino) {
        let filtrado = lista.filter((item)=> item.includes(termino.toUpperCase())) 
        if (filtrado.length > 0) {
            console.log("Productos encontrados")

            for (let i = 0; i < filtrado.length; i++) {
                console.log(`${i+1} - ${filtrado[i]}`)                
            }
        } 
    } else {
        alert("no se encontraron coincidencias")
    }
};

//Modificar un producto
const modificarProducto = (producto= prompt("ingrese el producto a modificar") ) => {
    if (producto) {
        let indice = lista.indexOf(producto.toUpperCase())
        if (indice > -1) {
            let nuevoProducto = prompt("ingrese el nuevo producto")
            if (nuevoProducto) {
                lista.splice(indice,1,nuevoProducto)
                alert("se modifico el producto")
            } else {
                console.log("se cancelo la operacion")
            }   
        } else {
            console.log("se cancelo la operacion")
        }
    } else {
        console.log("El producto no esta en la lista")
    }
};
*/
//CRUD
//Create Read Update Delete



/*
Practica lo visto en la última clase de arreglos armando un CRUD. Debes crear funciones que realicen las siguientes tareas:
Agregar títulos de películas en un arreglo llamado peliculas
Listar las películas en consola en orden alfabético
Filtrar películas por una palabra o término
Eliminar una película
Modificar el título de una película
*/


const peliculas = []
const agregarPeliculas = ()=> {
    let pedirPeliculas = prompt("ingrese que pelicula desea agregar a la lista")
    while (pedirPeliculas) {
        peliculas.push(pedirPeliculas.toUpperCase())
        alert("se agrego la pelicula a la lista")
        pedirPeliculas = prompt("ingrese que pelicula desea agregar a la lista")
    }
     alert("termino el ingreso de peliculas")
}

const listarPeliculas = () => {
    document.body.innerHTML = ""
    document.write("<h1>")
    document.write("Lista de peliculas")
    document.write("</h1>")
    if (peliculas.length > 0) {
        document.write("<ol>")
        peliculas.forEach((pedirPeliculas ) => {
        document.write("<li>")
        document.write(pedirPeliculas)
        document.write("</li>")
        })
        document.write("</ol>")
    } else {
        console.log("no hay peliculas en la lista")
    }
}
 
const filtrarPelicula = (termino = prompt("ingrese que desea buscar")) =>{
if (termino) {
    let filtrado = peliculas.filter((item) => item.includes(termino.toUpperCase()))
    if (filtrado.length > 0) {
        console.log("peliculas encontradas")

        for (let i = 0; i < peliculas.length; i++) {
            console.log(`${i + 1} - ${filtrado[i]}`);
            }
    } else {
        console.log("no se encontraron coincidencias")
    }
} else {
    console.log("se cancelo la operacion")
}
}


const eliminarPelicula = (pelicula = prompt("que pelicula desea eliminar de la lista")) => {

if (pelicula) {
    if (peliculas.includes(pelicula.toUpperCase())) {
        let posicion= pelicula.toUpperCase()
        let eliminar = peliculas.splice(posicion,1)
        alert(`la pelicula ${pelicula} se elimino de lista`)
    } else {
        alert("no se encuentra esa pelicula en la lista")
    }
} else {
    console.log("se cancelo la operacion")
}

}


const modificarPelicula = (pelicula = prompt("ingrese que pelicula desearia modificar")) => {
if (pelicula) {
    if (peliculas.includes(pelicula.toUpperCase())) {

        let indice = peliculas.indexOf(pelicula.toUpperCase())
        let nuevaPelicula = prompt("ingrese la nueva pelicula")
        alert("se a modificado la pelicula")
        peliculas.splice(indice,1,nuevaPelicula.toUpperCase())
    } else {
        alert("la pelicula no se encuentra en la lista 😤")
    }
} else {
    alert("se cancelo la operacion")
}
}

 
