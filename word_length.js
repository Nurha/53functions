function word_length(sentance){
	var wordSum = 0;
	var senAvg =0;

	var spltSen = sentance.split(" "); 
		for(var i =0; i < spltSen.length; i++){
			wordSum += spltSen[i].length;
		};
	senAvg = wordSum/spltSen.length;
	return [Math.ceil(senAvg), Math.floor(senAvg)];
};
