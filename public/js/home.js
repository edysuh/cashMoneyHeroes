const dropdown = document.getElementById("dropdownbutton");
console.log('dropdown', dropdown);

function calcSpendingBarWidth(category, total) {
	const total_bar = document.getElementById(total);
	const spent_category = document.getElementById(category);
	var total_value = total_bar.getAttribute("value");
	var spent_value = spent_category.getAttribute("value");
	var ratio = spent_value / total_value;
	
	if (ratio < 1) {
		spent_category.style.width = ratio * 100 + '%';
	} else {
		spent_category.style.width = '100%';
	}
}

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

dropdown.onclick = () => {
	const categories = document.getElementById("categories");
	categories.style.display = "inline-block";
};

