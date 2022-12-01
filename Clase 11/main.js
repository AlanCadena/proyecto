/**Condicionales,Operadores y Arrays */
// Array vacio//

let grupo = [];
//Array string//
let mascotas = ["gato", "perro", "conejo"];
//Array Numeros
let numeros = [1, 2, 3, 8, 4];
//Array boolean
let verdades = [true, false, true];

let persona = [3135131515, "Fulanito", "Cosme", 1981, true];
//Array de arrays
/** 
let resultados=[
    ['gato' , 'miau'],
    ['perro' , 'guau'],
    ['ardilla' , 'grito de ardilla']
];

let colorMascotas =[
['perro' , 'marron' , 'negro' , 'rojo'],
['gato' , 'blanco' , 'gris']
['jirafa' , 'amarilla'] 
];
 
//La cantidad de arrays
console.log(colorMascotas.length);
//Accedemos a una posicion
console.log(colorMascotas[0] [3]);
//La cantidad de elementos en el array
console.log(colorMascotas[1].lenght);
//La cantidad de caracteres en el elemento
console.log(colorMascotas[2] [1].lenght);

//Practica con yanel;
let colores=['rojo' ,'naranja','amarillo' , 'verde' ];
console.log(colores.length);
console.log(colores[0])
//Practica Con yanel lista super
//1.Crear Lista
 
 let lista = ["Harina"  , "Papas" , "Manzanas" , "Jugo" , "Chocolate"];
 //2.Pedir por Prom

 let articulo= prompt("Que articulo desea agregar a la lista?"); 
 //.3 hacer el condicional
 if (lista.includes(articulo)){
    alert(articulo + 'ya esta en la lista')
 }
 else{
    lista.push(articulo)
    alert("La lista es:" +lista)
 }
 */
/**Segundo practico con yanel (hacer un switch q nos devuelva el nombre del
 * dia segun el numero
 */
let numeroDia = new Date().getDay();
switch (numeroDia) {
  case 1:
    dia = "Lunes";
    break;

  case 2:
    dia = "martes";

    break;

  case 3:
    dia = "Miercoles";

    break;

  case 4:
    dia = "Jueves";
    break;
  case 5:
    dia = "Viernes";
    break;
  case 6:
    dia = "Sabado";
    break;

  default:
    dia = "Domingo";
}
console.log("El dia es  " + dia);
