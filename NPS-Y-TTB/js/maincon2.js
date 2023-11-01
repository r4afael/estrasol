jQuery(document).on('submit', '#formcc2', function(event){
	event.preventDefault();

	jQuery.ajax({
		url: 'campas2.php',
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
			$('.correcto').slideDown('slow');
			setTimeout(function(){
				$('.correcto').slideUp('slow');
			},5000);
			$('.botonlg').val('Enviar');
			
			//location.href = 'index.php';

		}
		if (!respuesta.error) {
			setTimeout(function(){
				url = 'index.php';
				$(location).attr('href',url);
				},5000);

		}else{
			if (respuesta.tipo == "1") {
				$('.error').slideDown('slow');
				setTimeout(function () {
					$('.error').slideUp('slow');
				}, 3000);
				$('.botonlg').val('Enviar');
			} else if (respuesta.tipo == "2") {
				$('.error2').slideDown('slow');
				setTimeout(function () {
					$('.error2').slideUp('slow');
				}, 5000);
				$('.botonlg').val('Enviar');
			}
		}
		
	})
	.fail(function(resp){
		console.log(resp.responseText);
	})
	.always(function(){
		console.log("complete");
	});
});
