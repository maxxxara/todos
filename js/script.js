



window.onload = function() {
	init();
	for(var i = 0; i < info.length; i++) {
		if (info[i] == null) {
			info.splice(i, 1);
		};
	}
	var localInfo = JSON.stringify(info);
	localStorage.setItem("info", localInfo);
};


function init() {
	var submitBtn = document.getElementById("submitBtn");
	var inputItem = document.getElementById("input");
	var todoList = document.getElementById("todoList");
	var removeBtn = document.getElementById("removeBtn");
	submitBtn.onclick = function() {
		if (info.length > 0 && info[info.length-1] !== null && info[info.length-1] !== undefined ) {
			var lastId = info[info.length - 1].id;
		} else {
			var lastId = 0;
		}
		var value = inputItem.value;

		var itemInfo = {
			"id": lastId + 1,
			"title": value,
			"checked": 0
		};
		if(value.length > 0) {
			
			newItem(value, lastId + 1);
			inputItem.value = "";
			info.push(itemInfo);
			var localInfo = JSON.stringify(info);
			localStorage.setItem("info", localInfo);
		}
	}

	


	input.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
		    event.preventDefault();
		    submitBtn.click();
		}
	});
}




