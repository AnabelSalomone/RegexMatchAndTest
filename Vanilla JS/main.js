function myTest() {

	let string = document.getElementById("textoprueba").value;
	let respuesta = "";
	let regex = /^b[aeiou]+t$/;


	//regex.test(string)

	if (regex.test(string)) {
		respuesta = "Correct! the form can be sent";
	} else {
		respuesta = "Uh oh, the form cannot be sent. Try another word.";
	}
	document.getElementById("resp").innerHTML = respuesta;

};


function myOtherTest() {
	let string = document.getElementById("textomatch").value;
	let respuesta = "";
	let regex = /unicornio/ig;

	//string.match(regex);

	if (string.match(regex) === null) {
		respuesta = "Your sentence must contain the word unicornio at least once";
	} else {
		respuesta = "Correct! the form can be validated";
	}

	document.getElementById("resp2").innerHTML = respuesta;

}