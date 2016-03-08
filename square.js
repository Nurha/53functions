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
