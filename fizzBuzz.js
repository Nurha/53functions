function fizzBuzz() {
	for(number=0; number<=100; number++) {
		if(number % 3 === 0){
			console.log('fizz');
		}
		else if(number % 5 === 0) {
			console.log('buzz');
		}
		else if(number % 3 && 5) {
			console.log('fizzBuzz');
		}
		console.log(number);
	};
};
console.log(fizzBuzz());
