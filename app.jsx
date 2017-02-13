import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import { routes } from './routes/routes';

const express = require('express'),
			path = require('path'), 
			mongoose = require('mongoose'),
			app = express();

mongoose.connect('mongodb://localhost/cashmoneydb');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/html', (req, res) => {
	res.sendFile(__dirname + "/views/home.html");
});

app.get('*', (req, res) => {
	match({ routes, location: req.url}, (err, redirectLocation, props) => {
		if (err) {
			res.status(500).send(err.message);
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (props) {
			const markup = renderToString(<RoutingContext {...props} />);
			console.log('markup', markup);
			res.render('index.html', {markup});
			// res.render('index');
			// res.sendFile(__dirname + "/views/index.html");
		} else {
			res.sendStatus(404);
		}
	});
});

app.listen(9000, () => {
	console.log("app.js listening on port 9000");
});

// ---- testing ----

// const Category = require(__dirname + '/models/categories.js');

// var food = new Category({
// 	name: 'food',
// 	budget: 400,
// 	spent: 280,
// });
// console.log('food', food);

// Category.find({ name: 'food'}, function(err, cat) {
// 	if (err) throw err;
	
// 	food.setBudget(500);
// 	food.save((err) => {
// 		if (err) throw err;
// 		console.log("save!");
// 	});
// 	console.log(cat);
// });

// console.log('food', food);

// ---- testing end ----
