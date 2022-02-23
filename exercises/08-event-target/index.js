window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		
			var x = event.target;
			alert("This is a " + x.tagName + " element");
		  
	});
};
