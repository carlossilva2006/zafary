
const boton=window.document.querySelector('boton');
boton.addEventListener('Click' , mostrardato);

function mostrardato(){
    const input1=document.querySelector("email").Value;
    const input2=document.querySelector("psw").Value;
    const email=  input1.Value ;
    const  psw =  input2 . Value ;
    ////
    consola.log (email);
    input1.Value =  ' ' ;
    input1 . focus ();
    consola.log (pws);
    input2.value  =  ' ' ;
    input2.focus ();
    //////
    if(email==='ejemplo@gmail.com' && psw==='123456'){
        console.log('puedes ingresar al sistema :D')
        alert("Bienvenido a zafary")
    }else{
        console.log('no puedes ingresar al sistema')
        alert("Email y/o contraseña incorrectos")
    }
} 
