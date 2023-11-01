jQuery(document).on('submit', '#formlg', function(event){
    var Url = $(location).attr('href');
	event.preventDefault();

	jQuery.ajax({
		url: 'login.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize(),
		beforeSend: function(){
			$('.botonlg').val('Validando...');
		}
	})
	.done(function(respuesta){
		console.log(respuesta);
		if (!respuesta.error) {
			var skin = 'Url'
			var skin2 = "0"
			
			if (respuesta.tipo == skin2){
				location.href = 'cambiar_con.php'
			}else if (respuesta.tipo != skin2){
				location.href = 'home.php'
			} else if (respuesta.tipo != skin){
				$('.error').slideDown('slow');
				setTimeout(function(){
					$('.error').slideUp('slow');
			},3000);
			$('.botonlg').val('Enviar');
			}

		}else{
			$('.error').slideDown('slow');
			setTimeout(function(){
				$('.error').slideUp('slow');
			},3000);
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
