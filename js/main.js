var currentTime = new Date();
var hours = currentTime.getHours();
var body = document.getElementsByTagName("body")[0];

var theme = function () {
	if (hours > 6 && hours < 18) {
		body.className = "day";
	} else {
		body.className = "night";
	}
};

theme();