/** Clase 15 Manipulacion de DOM 

console.log(document);// aca vemos el objeto document con el metodo console log
//console.dir(document);
console.dir(document);


//Metodo par obtener un nodo del DOM
let titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.innerHTML);// aca vemos el html interno

let nombre = "Cosme Fulanito";
titulo.innerHTML = "Hola" + nombre; // modifico el HTML interno con el innerhtml



let parrafos = document.getElementsByClassName ("parrafos");
console.log(parrafos);

let parrafosTag = document.getElementsByClassName("p");
console.log(parrafosTag);


//-----------------Ejemplo de modificacio Select Dinamico
const categorias = [];
//1- Solicitar una entrada al usuario
let entrada = prompt ("Ingresar categoria \n (Escribir 'ESC' para salir)")
// Si la estrada es distinta a 'ESC' en cada repetición cargar una categoria
while (entrada.toUpperCase() != "ESC"){
    //Incluir la categoria en el array
    categorias.push(entrada.toUpperCase());
    //Solicitamos una nueva categoria
    entrada = prompt ("Ingresar categoria \n (Escribir 'ESC' para salir)")
}
console.log(categorias);
//Obtenemos el elemento
let miSelect = document.getElementById("select");
console.log(miSelect);
// Recorrer el array
for (const categoria of categorias){
    miSelect.innerHTML += "<option>" + categoria + "</option>";
}


//--------Creacion de un Nuevo Modo

let titulo1 = document.createElement("h3"); //Creo el nodo
titulo1.innerHTML = "Hola desde JS"; // defino el contenido

document.body.appendChild(titulo1);
*/
// ejemplo creacion dinamica de nodos
class Producto{
    constructor(id, nombre, precio) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

const productos = [];
productos.push(new Producto (1,"Dona" , 60));
productos.push(new Producto (2,"Pan" , 460));
productos.push(new Producto (3,"Torta" , 560));
productos.push(new Producto (4,"Leche" , 760));

//Recorro el array para crear un nodo por valor en el array

for (const producto of productos){
    let divProducto = document.createElement("div");

    divProducto.innerHTML = `<h3> Nombre: ${producto.nombre} </h3>
                            <h4> Precio: ${producto.precio}</h4>`

document.body.appendChild(divProducto); //Agrego un nuevo hijo a body para que lo muestra en el HTML
}

