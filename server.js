var express = require('express'),
	app = express(),
	path = require('path'),
	fs = require('fs'),
	exphbs = require('express-handlebars'),
	bodyParser = require('body-parser');

var filename = './data/data.json',
	data = require(filename);

// configure application ----

app.set('port', (process.env.PORT || 9000));

app.use(express.static(path.join(__dirname, 'public')));

var handlebars = exphbs.create({
	defaultLayout: 'main',
	extname: 'html',
});

app.engine('html', handlebars.engine);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// rendering views ----

app.get('/', (req, res) => {
	res.render('landing', data);
});

app.get('/home', (req, res) => {
	res.render('home', data);
});

app.get('/budget', (req, res) => {
	res.render('budget', data);
});

// post requests ----

app.post('/login', (req, res) => {
	var login_form = req.body;
	res.render('home', data);
});

app.post('/budget', (req, res) => {
	var budget_data = req.body;
	var oldValue= 0;
	var total_budget = 0;
	var actualtotal = parseInt(budget_data["total"]);

	for (var key in budget_data) {
		var html_name = key.split("_");
		var category = html_name[0];
		var type = html_name[1];
		
		if (type == "budget") {
			var category_budget = budget_data[key];

			total_budget += parseInt(category_budget);
			oldValue += parseInt(data.categories[category].budget);
			modifyBudget(category, category_budget);
		}
	}
	
	if (budget_data["new_cat_name"] && budget_data["new_cat_val"]) {
		if (Object.keys(data.categories).length < 10) {
			data.categories[budget_data["new_cat_name"]] = { 
				"budget": makeStringMoney(budget_data["new_cat_val"]), 
				"spent": 0 
			};
			
			var category_budget = budget_data["new_cat_val"];
			
			total_budget += parseInt(category_budget);
			// oldValue += parseInt(data.categories[category].budget);
			
			fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
				if (err) console.log(err);
			});
		} else {
			res.send('<p>Cannot add more than 10 categories</p>');
		}
	}
	
	data.total.budget = makeStringMoney(String(actualtotal+total_budget-oldValue));

	res.redirect('home');
});

// start the app ----

app.listen(app.get('port'), () => {
	console.log('-------- listening on port', app.get('port'), 'for requests to re:server --------');
});

// helper functions ----

function modifyBudget(category, str_val) {
	data.categories[category].budget = makeStringMoney(str_val);

	fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
		if (err) console.log(err);
	});
}

function makeStringMoney(str_val) {
	str_val = str_val.split('.');
	
	if (!str_val[1]) {
		str_val = str_val[0] + '.00';
	} else if (str_val[1].length !== 2) {
		str_val = str_val[0] + '.' + str_val[1] + '0';
	} else {
		str_val = str_val[0] + '.' + str_val[1];
	}
	
	return str_val;
}
