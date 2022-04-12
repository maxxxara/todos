
if (localStorage.getItem("info")) {
	var info = JSON.parse(localStorage.getItem("info"));	
} else {
	var info = [];
}

function newItem(val, id, checked) {
	var itemEl = document.createElement("div");
	itemEl.setAttribute("class", "todo__list-item");
	itemEl.setAttribute("elem_id", id);
	var newCB = document.createElement("input");
	newCB.setAttribute("type", "checkbox");
	if (typeof checked !== undefined) {
		if (checked) {
			newCB.setAttribute("checked", "true");
		};
	};
	var newP = document.createElement("p");
	newP.innerText = val;
	var newImg = document.createElement("img");
	newImg.setAttribute("onclick", "removeElem(" + id + ")");
	newImg.setAttribute("src", "img/icon-cross.svg");
	itemEl.appendChild(newCB);
	itemEl.appendChild(newP);
	itemEl.appendChild(newImg);
	todoList.appendChild(itemEl);
};


function removeElem(id) {
	var el = document.querySelector('[elem_id="' +  id + '"]');
	el.remove();
}