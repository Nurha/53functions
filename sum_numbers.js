function sum_numbers(n){
var x = 0;
	for(var i = 1; i <= n; i++) { // for loop, first part controls where it starts, the second part controls where it ends, the last part increments the variable by 1
		console.log(i);
		x = x + i;
	}

	return x;
}
console.log(sum_numbers(4));
