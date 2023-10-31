let inp1 = document.querySelector('.usuario');
inp1.focus();
inp1.addEventListener('click', function(){
    inp1.style.boxShadow = '';
});
let inp2 = document.querySelector('.contraseña');
inp2.addEventListener("click", function(){
    inp2.style.boxShadow = '';
});

axios("verificarCredencial.php").then(respuesta=>{console.log('xd'+respuesta.data);
    if(respuesta.data=='Hay sesion'){
        window.location.href='Inicio.html'
    }
});

inp1.addEventListener('keydown', function(e){
    if(e.keyCode==13){
        inp2.focus();
    }
});

inp2.addEventListener('keydown', function(e){
    if(e.keyCode==13){
        let boton = document.querySelector('.boton');
        boton.focus();
    }
})


function entrar(){
    let usuario = document.querySelector('.usuario').value;
    let contraseña = document.querySelector('.contraseña').value;
    usuario = usuario.toLowerCase();
    let mensaje ='<br />\n<b>Warning</b>:  mysqli_num_rows() expects parameter 1 to be mysqli_result, boolean given in <b>/home/censosmk/public_html/pricepointmonitor.com/kardex/login.php</b> on line <b>16</b><br />\nlogeado!'

    axios.post("login.php", {"usuario":usuario, "pass":contraseña}).then(respuesta=>{console.log(respuesta.data);
        if(respuesta.data=='logeado!'){
            window.location.href='Inicio.html';
        }else if(respuesta.data=='usuario incorrecto'){
            let inp1 = document.querySelector('.usuario');
            inp1.style.boxShadow = '2px 2px 8px 3px red';
        }else{
            let inp2 = document.querySelector('.contraseña');
            inp2.style.boxShadow = '2px 2px 8px 3px red';
        }
    });
}

function watch(inp){
    let input = document.querySelector(inp);
    if(input.type=='password'){
        input.type='text';
    }else{
        input.type='password';
    }
}