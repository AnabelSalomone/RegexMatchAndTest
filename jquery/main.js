$(document).ready(function () {


	$('#button-test').on("click", function () {
		let string = $('#textoprueba').val();
		let regex = /^b[aeiou]+t$/;
		let respuesta = "";

		if (regex.test(string)) {
			respuesta = "Correct! The form can be sent";
		} else {
			respuesta = "Try again. The form cannot be sent";
		}

		$('#resp').text(respuesta);
	})


	$('#button-match').on("click", function () {

		let string = $('#textomatch').val();
		let regex = /unicornio/ig;
		let respuesta = "";

		if (string.match(regex)) {
			respuesta = "Correct! The form can be sent";
		} else {
			respuesta = "Nope, the form can't be sent";
		}

		$('#resp2').text(respuesta);

	})



});