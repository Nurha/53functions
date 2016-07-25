function square(character){
	var str = "";
	for(x=0; x<4; x++){
		//console.log(x);
    	str += "\n"+ character;
	   for(y=0; y<3; y++){
			//console.log(y);
			str += character;
		};

	};
	return str;
};
console.log(square("#"));


// function tri(number){
//   var str = '';
//   var count = 0;
//   for(x=0; x<number; x++){
//     for(y=0; y<count; y++){
//         str += '*';
//     };
//     count++;
//     str += '\n';
//   };
//   return str;
// };
// console.log(tri(5));
