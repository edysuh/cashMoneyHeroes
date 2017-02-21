var express = require('express'),
	app = express(),
	path = require('path'),
	fs = require('fs'),
	filename = './data/data.json',
	data = require(filename);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

function modifyBudget(category, val) {
	data.categories[category].budget = val;
	console.log('data', data);

	fs.writeFileSync(filename, JSON.stringify(data, null, 2), (err) => {
		if (err) console.log(err);
	});
}

modifyBudget("food", 10);

app.listen(9000, () => {
	console.log('-------- listening on port 9000 for requests to re:server --------');
});
