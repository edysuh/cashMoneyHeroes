var express = require('express'),
	app = express(),
	path = require('path'),
	fs = require('fs'),
	exphbs = require('express-handlebars');

var filename = './data/data.json',
	data = require(filename);

app.set('port', (process.env.PORT || 9000));

app.use(express.static(path.join(__dirname, 'public')));

var handlebars = exphbs.create({
	defaultLayout: 'main',
	extname: 'html',
});

app.engine('html', handlebars.engine);
app.set('view engine', 'html');

app.get('/', (req, res) => {
	res.render('index', data);
});

app.get('/budget', (req, res) => {
	res.render('budget', data);
});

app.post('/budget', (req, res) => {
	
});



// start the app ----

app.listen(app.get('port'), () => {
	console.log('-------- listening on port', app.get('port'), 'for requests to re:server --------');
});


// helper functions ----

function modifyBudget(category, val) {
	data.categories[category].budget = val;
	console.log('data', data);

	fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
		if (err) console.log(err);
	});
}

// modifyBudget("food", 450);

