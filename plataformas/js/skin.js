jQuery(document).on('submit', '#frminformacion', function (event) {
	var Url = $(location).attr('href');
	//var formulario = $("#frminformacion").serializeArray();
	event.preventDefault();
	var $loader = $('.loader');

	jQuery.ajax({
		url: 'guardar_skin.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize(),
		beforeSend: function () {
			$('.enviar').val('Creando...');
			$loader.show();
			document.getElementById("contenido_for").style.display = "none";
			document.getElementById("error1").style.display = "none";
		}
	})
		.done(function (respuesta) {
			console.log(respuesta);
			if (!respuesta.error) {
				document.getElementById("error1").style.display = "none";
				document.getElementById("correcto1").style.display = "block";
				document.getElementById("correcto2").innerHTML = respuesta.tipo;
				document.getElementById("correcto2").setAttribute("href", respuesta.tipo);
				$loader.hide();
				document.getElementById("contenido_for").style.display = "block";
				console.log('Exito');
				//alert('SKIN CREADO');
				$('.enviar').val('Guardar');
				/*Limpiamos el formulario*/
				document.getElementById("frminformacion").reset();

			} else if (respuesta.tipo == "1") {
				document.getElementById("error1").style.display = "block";
				document.getElementById("error1").innerHTML = "EL SKIN YA EXISTE";
				document.getElementById("correcto1").style.display = "none";
				$loader.hide();
				document.getElementById("contenido_for").style.display = "block";
				$('.enviar').val('Guardar');
			}
		})
		.fail(function (resp) {
			console.log(resp.responseText);
			$loader.hide();
			document.getElementById("contenido_for").style.display = "block";
		})
		.always(function () {
			console.log("complete");
			$loader.hide();
			document.getElementById("contenido_for").style.display = "block";
		});
});