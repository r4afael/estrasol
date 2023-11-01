function Eliminar(txtID) {
    
if (confirm('è¢ƒSeguro que deseas eliminar?')) {
  console.log('Si');
      $.ajax({
            type: "POST",
            url: "eliminarUser.php",
            cache: false,
            data: {txtID},
            error:function(){

                alert("Ocurrio un error");
            },
            beforeSend:function(){

                
            },
            success: function(okay){
            alert("Usuario Eliminado");
            $('#tabla2').load('busqueda.php');
            }

    });
  
  
} else {
  console.log('No');
}

}

function Editar(txtID) {
    alert("Editamos ID" + txtID + " Aun pendiente de programar xD, pero ya puedes eliminar eso ya funciona");
}
