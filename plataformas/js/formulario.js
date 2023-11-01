jQuery(document).on('submit', '#frminformacion', function(event){
    var Url = $(location).attr('href');
    //var formulario = $("#frminformacion").serializeArray();
	event.preventDefault();

	jQuery.ajax({
		url: 'guardar.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize(),
		beforeSend: function(){
			$('.botonlg').val('Guardando...');
		}
	})
	.done(function(respuesta){
		console.log(respuesta);
		if (!respuesta.error) {
        console.log('Exito');
        alert('Usuario Guardado');
        $('.botonlg').val('Enviar');
        /*Limpiamos el formulario*/
        document.getElementById("frminformacion").reset();
        
		}else{
			alert('Ocurrio un error');
			$('.botonlg').val('Enviar');
		}
	})
	.fail(function(resp){
		console.log(resp.responseText);
	})
	.always(function(){
		console.log("complete");
	});
});
