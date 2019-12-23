
const boton=window.document.querySelector('#boton');
const botonlimpiar=window.document.querySelector('#boton-limpiar');
boton.addEventListener('Click', mostrardato);

function mostrardato(){
    var email=document.getElementById("email").Value;
    var psw=document.getElementById("psw").Value;
    if(email==="ejemplo@gmail.com" && psw==="123456"){
        console.log('puedes ingresar al sistema :D')
        alert("Bienvenido carlos a zafary")
    }else{
        console.log('no puedes ingresar al sistema')
        alert("Email y/o contraseña incorrectos")
    }
} 
