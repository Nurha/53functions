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
