jQuery(document).on('submit', '#formnotificacion', function (event) {
	var Url = $(location).attr('href');
	//var formulario = $("#frminformacion").serializeArray();
	event.preventDefault();
	//var $loader = $('.loader');

	jQuery.ajax({
		url: 'enviar_not.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize(),
		beforeSend: function () {
			$('.enviar').val('Enviando...');
			//$loader.show();
			document.getElementById("error1").style.display = "none";
		}
	})
		.done(function (respuesta) {
			console.log(respuesta);
			if (!respuesta.error) {
			    
				document.getElementById("error1").style.display = "none";
				
				document.getElementById("correcto1").style.display = "block";
				//$loader.hide();
				console.log('Exito');
				//alert('SKIN CREADO');
				$('.enviar').val('Notificar');
				/*Limpiamos el formulario*/
				document.getElementById("formnotificacion").reset();

			} else {
				document.getElementById("error1").style.display = "block";
				//document.getElementById("error1").innerHTML = "EL SKIN YA EXISTE";
				document.getElementById("correcto1").style.display = "none";
				//$loader.hide();
				$('.enviar').val('Notificar');
			}
		})
		.fail(function (resp) {
			console.log(resp.responseText);
		})
		.always(function () {
			console.log("complete");
		});
});
