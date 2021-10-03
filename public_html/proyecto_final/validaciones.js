/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function capturar(){
    let form = document.form_registro_usuario;
    var flag1= validar_nombreUsuario(document.getElementById('in_usuario').value);
    var flag2= validar_nombreUsuario(document.getElementById('in_contrasena').value);
    /*alert(document.getElementById('in_usuario').value);
    alert(document.getElementById('in_contrasena').value);*/
}

function validar_nombreUsuario(string){           
    //var validar = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,9}$/;
    var validar1 = /\w{4,9}/;
    var valido = validar1.test(string);    
    return valido;
}

function validar_contrasena(string){    
    //var validar = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    var validar1 = /\w{6,}/;
    var valido = validar1.test(string);    
    return valido;
}

module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;