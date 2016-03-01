var EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();
event.on("exit", function() {
	console.log("exiting...");
	process.exit();
});
process.stdin.setEncoding("utf-8");
process.stdin.on("data", function(data) {
	//console.log(data);
	if (data.indexOf("exit") >= 0) {
		event.emit("exit");
	}
});