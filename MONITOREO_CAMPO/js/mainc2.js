jQuery(document).on('submit', '#formcc', function (event) {
	event.preventDefault();

	jQuery.ajax({
		url: 'campas.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize(),
		beforeSend: function () {
			$('.botonlg').val('Validando...');
		}
	})
		.done(function (respuesta) {
			console.log(respuesta);
			if (!respuesta.error) {
				$('.correcto').slideDown('slow');
				setTimeout(function () {
					$('.correcto').slideUp('slow');
				}, 5000);
				$('.botonlg').val('Enviar');
                $('#error2').hide();
				$('#error').hide();
				//location.href = 'index.php';

			}
			if (!respuesta.error) {
				setTimeout(function () {
					url = 'home.php';
					$(location).attr('href', url);
				}, 5000);

			} else {
				if (respuesta.tipo == "1") {
					$('#error').show();
					$('#error2').hide();
					setTimeout(function () {
						$('#error').show();
					    $('#error2').hide();
					}, 3000);
					$('.botonlg').val('Enviar');
				} else if (respuesta.tipo == "2") {
					$('#error2').show();
					$('#error').hide();
					setTimeout(function () {
						$('#error2').show();
					    $('#error').hide();
					}, 5000);
					$('.botonlg').val('Enviar');
				}
			}

		})
		.fail(function (resp) {
			console.log(resp.responseText);
		})
		.always(function () {
			console.log("complete");
		});
});