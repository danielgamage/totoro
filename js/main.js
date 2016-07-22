var currentTime = new Date();
var hours = currentTime.getHours();
var body = document.querySelector("body");

function theme() {
	if (hours > 6 && hours < 18) {
		console.log("day")
		body.className = "day";
	} else {
		console.log("night")
		body.className = "night";
	}
};

theme();
