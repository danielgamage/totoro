var currentTime = new Date();
var hours = currentTime.getHours();
var body = document.querySelector("body");

function theme() {
	if (hours > 6 && hours < 18) {
		body.className = "day";
	} else {
		body.className = "night";
	}
};

theme();
