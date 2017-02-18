function check(form) {

	if (form.username.value == "cashmoneyheroes" && form.password.value == "helloworld")
	{
		window.open('./index.html')
	}
	else
	{
		alert("The username and password you entered don't match")
	}
}