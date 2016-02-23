function square(character){
	var str = "";
	for(x=0; x<4; x++){
    	str += "\n"+ character;
	   for(y=0; y<3; y++){
			str += character;
		};

	};
	return str;
};
console.log(square("#"));
