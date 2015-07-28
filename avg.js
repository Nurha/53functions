function avg(sentance){
	var wordSum = 0;
	var avg = 0;
	var splitSent = sentance.split(" ");
	for(var x = 0; x < splitSent.length; x++){
		wordSum += splitSent[x].length;
	};
	avg = wordSum/splitSent.length;
	return[Math.ceil(avg)];
};