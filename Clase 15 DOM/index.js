/**Ejemplo SetImterval */

function mostrarHora(){
    let reloj = document.getElementById("reloj")
    let hora = new Date();
    reloj.innerHTML = hora.toLocaleTimeString();
}
let cronometro = setinterval(mostrarHora,1000);