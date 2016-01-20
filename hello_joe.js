function hello_joe(name) {
	if (name === "Joe" || name === "Bob"){
		return "Hello!";
	}
	else{
		return "Hello, " + name + "!";
	}
};
console.log(hello_joe("Nurha"));
console.log(hello_joe("Bob"));
console.log(hello_joe("Joe"));
