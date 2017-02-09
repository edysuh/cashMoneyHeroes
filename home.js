console.log("hello from home.js");

function calcSubtotalWidth(cat) {
	const totalbar = document.getElementById("totalbar");
	const cat_sub_bar = document.getElementById(cat);
	console.log('cat_sub_bar', cat_sub_bar);
	
	var totalvalue = totalbar.getAttribute("value");
	console.log('totalvalue', totalvalue);
	
	var cat_sub_value = cat_sub_bar.getAttribute("value");
	console.log('cat_sub_value', cat_sub_value);
	
	cat_sub_bar.style.width = cat_sub_value / totalvalue * 100 + '%';
}

calcSubtotalWidth("food");
calcSubtotalWidth("coffee");
calcSubtotalWidth("clothes");
calcSubtotalWidth("alcohol");
calcSubtotalWidth("textbooks");
