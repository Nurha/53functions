var count = 1;//This is a variable named count with a numerical value currently set at 1.
var list =[];//This is a variable named list with a value set to an array.
	var hello_list = function(number) {//hello_list is a function
			while(count<=number) {// while this condition is true it will loop though the block of code
				console.log("hello world");
					count++;//will add one to count, when count becomes greater then number the loop will stop
					list.push("hello world");//pushes into the array
			}
			return list;
	}