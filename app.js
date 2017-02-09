const express = require("express");
const app = express();

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/home.html");
});

app.listen(8080, () => {
	console.log("listening on port 8080");
});
