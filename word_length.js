function word_length(sentance){
	var wordSum = 0;
	var senAvg =0;

	var spltSen = sentance.split(" ");
		for(var i =0; i < spltSen.length; i++){
			// console.log(i);
			wordSum += spltSen[i].length;
			// console.log(wordSum);
		};
	senAvg = wordSum/spltSen.length;
	console.log(senAvg);
	return [Math.ceil(senAvg), Math.floor(senAvg)];
};
console.log(word_length('i love fruit'));
