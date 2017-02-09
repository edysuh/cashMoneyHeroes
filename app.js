const express = require("express");
const app = express();

// const routes = require("./routes/home");
// const routes = require("./routes/index");
// const users = require("./routes/users");

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/home.html");
});

app.listen(8080, () => {
	console.log("listening on port 8080");
});
