/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let registros=[]; // arreglo vaci­o;

function agregarRegistro(){
    
    let regi = {usuario: document.getElementById("in_usuario").value,contrasena: document.getElementById("in_contrasena").value};
    usuario = document.getElementById("in_usuario");
    contrasena = document.getElementById("in_contrasena");
    
    alert(usuario.value);
    alert(contrasena.value);
    
    registros.push(regi);
    console.log(registros);
    
    
}

function filtrarPorContrasena(arreglo, filtro){
    
    alert("ingreso a funcion filtrar");
    
    console.log(arreglo);// comando de prueba
    filtrados = arreglo.filter(filtrado => filtrado.contrasena.length <= filtro);
    
    console.log(filtrados);
    return filtrados ; //filtrados;
    
}


module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.filtrarPorContrasena = filtrarPorContrasena;