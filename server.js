var express = require('express'),
	app = express(),
	path = require('path'),
	fs = require('fs'),
	filename = './data/data.json',
	data = require(filename),
	exphbs = require('express-handlebars');

app.set('port', (process.env.PORT || 9000));

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({extname: 'handlebars', defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/html/budget', (req, res) => {

});





// start the app ----

app.listen(app.get('port'), () => {
	console.log('-------- listening on port', app.get('port'), 'for requests to re:server --------');
});


// helper functions ----

function modifyBudget(category, val) {
	data[category].budget = val;
	console.log('data', data);

	fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
		if (err) console.log(err);
	});
}



modifyBudget("food", 450);

