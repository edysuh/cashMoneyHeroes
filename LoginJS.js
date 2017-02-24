function check(form) {
	if (form.username.value == "cashmoneyheroes" && form.password.value == "helloworld") {
		window.open('http://localhost:9000/', '_self');
	}
	else {
		alert("Invalid Username/Password");
	}
}
