function square_param(character, size){
	var hash = "";
	for(x=0; x<size; x++){
		hash += "\n"+character;
		for(y=0; y<size; y++){
			hash += character;
		};
	};
	return hash;
};
console.log(square_param('#', 4));

// function square(character, size) {
//     // If character is not a string, then set it's default value to '*'
//     var ch    = typeof character == 'string'
//                     ? character : '*',
//         // If size is not a number, then set it's default value to 4
//         s     = typeof size == 'number' ? size : 4,
//         inner = '', i, j;
//
//     // Make a square
//     for (i = 0; i < s; i++) { // Rows
//         for (j = 0; j < s; j++) // One-line for
//             inner += ch; // Prepare the one line
//         inner += '<br>'; // After the end of the line add a linebreak
//     }
//     document.body.innerHTML += inner; // Set the innerHTML
// }
// square(); // Will print 4x4 square filled with '*'s
