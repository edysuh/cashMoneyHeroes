const mongoose = require('mongoose'),
			Schema = mongoose.Schema;

var categorySchema = new Schema({
	name: String, 
	budget: Number,
	spent: Number,
});


categorySchema.methods.setName = (nname) => {
	this.name = nname;
	return this.name;
};

categorySchema.methods.setBudget = (nbudget) => {
	this.budget = nbudget;
	return this.budget;
};

categorySchema.methods.setSpent = (nspent) => {
	this.spent = nspent;
};

categorySchema.methods.setAll = (nname, nbudget, nspent) => {
	this.name = nname;
	this.budget = nbudget;
	this.spent = nspent;
};


var Category = mongoose.model('Category', categorySchema);

module.exports = Category;
