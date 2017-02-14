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

dropdown.onclick = () => { toggleDropDown(categories); };

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

calcSpendingBarWidth("catbarfood","catFood");
calcSpendingBarWidth("catbarcoffee","catCoffee");
calcSpendingBarWidth("catbarclothes","catClothes");
calcSpendingBarWidth("catbaralcohol","catAlcohol");
calcSpendingBarWidth("catbartextbook","catTextbook");
