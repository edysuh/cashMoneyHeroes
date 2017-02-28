const dropdown = document.getElementById("total_dropdown");
const categories = document.getElementById("categories");
const all_hidden_els = document.getElementsByClassName("detail");
const category_dropdown = document.querySelectorAll(".cat_dropdown");


categories.style.display = "none";

function calcSpendingBarWidth(category, total) {
	const total_bar = document.getElementById(total);
	const spent_category = document.getElementById(category);
	var total_value = total_bar.getAttribute("value");
	var spent_value = spent_category.getAttribute("value");
	
	var ratio = spent_value / total_value;
	
	spent_category.style.width = (ratio < 1) ? ratio * 100 + "%" : "100%";
}

function toggleDropDown(el) {
	el.style.display = (el.style.display === "none") ? "block" : "none";
}

//whenOver process: 1. check for each category if the amount spent is greater than the allocated budget;
//		            2. if the amount spent is greater than allocated budget, change the font color of amount spent


function checkOver() {
	const allcategory = document.getElementsByClassName("category");
	const number = document.getElementsByTagName("span");
	
	for (var i = 0; i < allcategory.length; i++) {
		var category0 = allcategory[i].getAttribute('id');
		var category1 = document.getElementById(category0);
		var budget = category1.getAttribute("value");
		var category2 = category0.split('_')[1];
		//var lgth = category2.length;
		var catbarid = "catbar" + category2;
		var category3 = document.getElementById(catbarid);
		var spent = category3.getAttribute("value");
		var num_to_change = number[i+5];
		//var lgth2 = num_to_change.length;
		//var final = num_to_change.substr(lgth+2, lgth2);
		//var type = typeof final;

		// console.log(category0);
		// console.log(category1);
		// console.log(spent);
		// console.log(category2);
		//console.log(lgth);
		// console.log(lowercase);
		// console.log(catbarid);
		// console.log(category3);
		// console.log(budget);
		// console.log(number);

		if (spent >= budget) {
			num_to_change2.style.color = 'red';
			num_to_change.style.color = 'red';
		}
	}
}


function changeShow() {

	if (categories.style.display === "none") 
	{
		dropdown.textContent = "show less";
		checkOver();
		toggleDropDown(categories);

	}
	else 
	{
		dropdown.textContent = "show more";
		toggleDropDown(categories);
	}
}

//unnecessary to toggleDropDown 2 times
//dropdown.onclick = () => { toggleDropDown(categories); };
//dropdown.onclick = () => { checkOver(); };
dropdown.onclick = () => { changeShow(); };

category_dropdown.forEach(category_arrow => {
	var category = category_arrow.getAttribute('id').split("_")[0];
	var cat_details = document.getElementById(category + "_detail");
	cat_details.style.display = "none";
	
	category_arrow.onclick = () => { toggleDropDown(cat_details); };
});


// dumb hard code

calcSpendingBarWidth("food", "totalbar");
calcSpendingBarWidth("coffee", "totalbar");
calcSpendingBarWidth("clothes", "totalbar");
calcSpendingBarWidth("alcohol", "totalbar");
calcSpendingBarWidth("textbooks", "totalbar");

calcSpendingBarWidth("catbarfood","cat_food");
calcSpendingBarWidth("catbarcoffee","cat_coffee");
calcSpendingBarWidth("catbarclothes","cat_clothes");
calcSpendingBarWidth("catbaralcohol","cat_alcohol");
calcSpendingBarWidth("catbartextbook","cat_textbook");
