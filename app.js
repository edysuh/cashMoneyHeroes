const express = require('express'),
			path = require('path'), 
			mongoose = require('mongoose'),
			app = express();

mongoose.connect('mongodb://localhost/cashmoneydb');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/views/home.html");
});

// ---- testing ----

const Category = require(__dirname + '/models/categories.js');

var food = new Category({
	name: 'food',
	budget: 400,
	spent: 280,
});
console.log('food', food);

// ---- testing end ----

app.listen(9000, () => {
	console.log("app.js listening on port 9000");
});
