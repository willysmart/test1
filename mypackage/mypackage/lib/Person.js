function Person() {
	var name;
	this.setName = function(n) {
		this.name = n;
	}
	this.getName = function() {
		return this.name;
	}
	this.sayHi = function() {
		console.log("Hi, " + this.name);
	}
}
module.exports = Person;