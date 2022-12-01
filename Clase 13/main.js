/** Bucles e interacciones 
//While incremento
let i = 0;
while (i > 5) {
    console.log('El valor de i : ' , i);
    i= i + i;
}

//Decremento
let numero = 100
while(numero > 0){
document.write("Te queda saldo", numero , "<br>");
numero = numero -5;

}

//Do While
let i=5
do{
   console.log("Ela valor de i = " , i);
   i = i +1 
} while (i < 5)

//Practica yanel pasos por caminar
let numero =100;
while(numero > 0){
document.write("Solo faltan por caminar",numero,"<br>")
numero = numero -1;
}

//Ciclo for
for(let i = 0; i < 4; i++) {
console.log(i)
}
let frutas=
[
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limon",
    "Kiwi"

];
for (let i = 0 ; i< frutas .length; i++){
    let fruta =frutas[i] ;
    console.log (fruta + "tiene" + fruta.length + "letras")
}

for (let i = 0 <=10; i++){
    alert[i]
}

let ingresarNumero = parseInt(prompt("Ingresa Numero"));
for (let i = 1; i <=10; i++){
    let resultado = ingresarNumero * i;
    alert (ingresarNumero + "x" + i + " = " +resultado);
}

//Metodos Array;For Each
let objetosMagicos =["Varita" , "Lechuza" , "Caldera"];
objetosMagicos.forEach(function(objetosMagicos){
    console.log("Onjetos con Foreach es:" , objetosMagicos);

})

let objetosMagicos =["Varita" , "Lechuza" , "Caldera"];
objetosMagicos.forEach((objetosMagicos)=>
    console.log("Lo Mismo Con Funcon Flecha:" , objetosMagicos)


)
//.Map() :
const numeros = [1 , 2 , 3 , 4 , 5 , 6 ];
const porDos = numeros.map((x)=> x * 2);
console.log("Por dos",porDos);

//Metodo Find:
// nos devuleve el primer valor q encuentre
const numeros = [1 , 2 , 3 , 4 , 5 , 6 ];
const encontrado=numeros.find(elemento => elemento > 3);
console.log(encontrado);

const nombres = ["Ana" , "Ema" , "Juan"];
const encontrado2 = nombres.find((elemento) => elemento ==="Ema");
console.log(encontrado2);

//.Filter()
let numeros = [, 2 , 5 , 6 , 18 , 201 ];
let numerosMayoresCinco = numeros.filter((n) =>{
    return n > 5
})
console.log(numerosMayoresCinco);

//Practica con Matias:
//arrays gralmente se hacen con const.
const listaDeNumeros = [8 , 2 , 4];
console.log[0]
//el iniciador de bucle/la condicion del bucle/el incremento del bucle
for(let i = 0; i < listaDeNumeros.length; i++);
console.log(listaDeNumeros[i])

//FOR OF (BUCLE EXCLUSIVAMENTE PARA ARRAYS)
const listaDeNumeros = [8 , 2 , 4];
for(let numero of listaDeNumeros){
    console.log(numero)
}

const listaDeNumeros = [8 , 2 , 4];
for(let nimero of listaDeNumeros){
    if(numero < 3){
        console,llog("El Numero" + numero + "No es mayor a")
    }
}
//Funcion:
const sumar = () =>{
    console.log( 3 + 9 );
}


//Actividad1
const listaDeNumeros = [8 , 2 , 4 , 9 , 11 ,7];
   const result = listaDeNumeros.map( (numero) => 
 {
 if(numero % 2 === 0){
  return  numero + "es par"
 }else{
    return numero + "es impar"
 }
 })
 */
//Actividad 2 
const listaDeNombres = ["Francisco" , "Matias" , "Nancy" , "Alejandro",
"Javier" , "Emma" , "Juli"]
const nombresCortos = listaDeNombres.filter((nombre) => nombre.length < 5)


