/**Onjetos 
//Declaracion de Objetos Literal
const producto1 ={
    id: 1,
    nombre: "tallarines",
    precio: 80.5
}
console.log(producto1.nombre);
console.log(producto1.precio);
console.log(producto1.id);
*/
//Imprimo las propiedades del objetos con notacion punto:
/** 
alert(
    " El Producto id: " + producto1.id +
    " Nombre " + producto1.nombre +  " Precio " + producto1.precio);

     //Imprimo las propiedades del objetos con notacion corchete:
    
    alert(
        " El Producto id: " + producto1['id'] +
        " Nombre " + producto1['nombre'] +  " Precio " + producto1['precio']);

//Ejemplo de funcion constructora
function Producto(id , nombre ,precio){
this.id = parseInt(id);
this.nombre = nombre;
this.precio = parseFloat(precio);
}
//Instanciar objetos con funcion constructora:
const producto2 = new Producto(1, "Tallarines" , 80.5);
const producto3 = new Producto(2, "Pan" , 100);
const producto4 = new Producto(3, "Arroz" , 90.5);



function Producto( id , nombre , precio){
    this.id = parseInt(id);
    this.nombre = nombre ;
    this.precio = parseFloat (precio);
    //Metodo
    this.descuento = function(valor){
        this.precio -= valor;
    }
}



console.log(producto2);
console.log(producto3);
console.log(producto4);
producto4.descuento(10);
console.log(producto4.precio);


//Ejemplo con prompt
//Si quisiera que el usuario ingrese valores por prompt
const producto5 = new Producto(prompt("Ingresar id") , 
prompt ("Ingresar Nombre") , prompt("Ingresar Precio"));

console.log(producto5);
producto5.descuento(100);
console.log(producto5.precio);



//Declaracion de clase:
class ProductoClass{
Constructor(id, nombre , precio){
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseFloat(precio);
}
descuento(valor){
    this.precio -= valor;
}
}
//Instanciar Objetoss con Clase
const producto6 = new ProductoClass(3 , "Chocolate" , 250);
console.log(producto6);
producto6.descuento(40);
console.log(producto6);
//Recorrer propiedades y valores por propiedad de un objeto
for(let propiedad in producto6){
    console.log(propiedad);
    console,log(producto6[propiedad])
};
*/

//Practicas con Matias;
//1.Crear array de objetos=lista
    const productos =[
    {
    Name:"Celeron" ,
    Modelo:"j192" ,
    Precio:4000
    },
    {
    Name:"Pemtium",
    Modelo:"X4",
    Precio:10000,

    },
    {
        Name:"i5",
    Modelo: "10000Gen",
    Precio:50000,
    },
]
// para ingresar al documento document.getElementById("contenedorDeProductos")
const contenedorDeProductosHTML = document.getElementById ("contenedorDeProductos");
let nombreModelo = "pentium"
//Template Strings:
/* Una forma de hacerlo seria
let plantilla = `<div class="carta">
    <div class="carta">
    <h2>Procesadores En Venta</h2>
    <p>Modelo: ${productos[0].Modelo}</p>
    <p>Precio: ${productos[0].Precio}</p>
    </div>`


    let plantilla2 = `<div class="carta">
    <div class="carta">
    <h2>Procesadores En Venta</h2>
    <p>Modelo: ${productos[1].Modelo}</p>
    <p>Precio: ${productos[1].Precio}</p>
    </div>`*
    */

/*contenedorDeProductosHTML.innerHTML += plantilla2 */
//UtilizaNDO UN BUCLE para no repetir plantillas
const crearPlantilla = (producto)=>{
    return `<div class="carta">
    <h2>${producto.Name}</h2>
    <p>Modelo: ${productos.Modelo}</p>
    <p>Precio: ${productos.Precio}</p>
    </div>`
}

for(let producto of productos){
    contenedorDeProductosHTML.innerHTML += crearPlantilla(producto)


};



