console.log("hello from home.js");

function calcSubtotalWidth(cat) {
	const totalbar = document.getElementById("totalbar");
	const cat_sub_bar = document.getElementById(cat);
	var totalvalue = totalbar.getAttribute("value");
	var cat_sub_value = cat_sub_bar.getAttribute("value");
	
	cat_sub_bar.style.width = cat_sub_value / totalvalue * 100 + '%';
}

function calcCatWidth(cat,catTot) {
	const totalbar = document.getElementById(catTot);
	const cat_sub_bar = document.getElementById(cat);
	var totalvalue = totalbar.getAttribute("value");
	var cat_sub_value = cat_sub_bar.getAttribute("value");
	
	cat_sub_bar.style.width = cat_sub_value / totalvalue * 100 + '%';
}


calcSubtotalWidth("food");
calcSubtotalWidth("coffee");
calcSubtotalWidth("clothes");
calcSubtotalWidth("alcohol");
calcSubtotalWidth("textbooks");


calcCatWidth("catbarfood","catFood");
calcCatWidth("catbarcoffee","catCoffee");
calcCatWidth("catbarclothes","catClothes");
calcCatWidth("catbaralcohol","catAlcohol");
calcCatWidth("catbartextbook","catTextbook");
