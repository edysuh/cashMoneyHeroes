function check(form) {
	if (form.username.value == "cashmoneyheroes" && form.password.value == "helloworld") {
		window.open('./index.html', '_self');
	}
	else {
		alert("Invalid Username/Password");
	}
}
