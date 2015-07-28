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
// var word_length = function(sentence){
	
// 	var words = sentence.split(' ');
//         var sum = 0;
//         var numWords = words.length;

// 	words.forEach(function(word){
// 		sum+=(word.split('').length);
//         })
        
//         sum = sum/numWords; 
//           return [Math.ceil(sum),Math.floor(sum)];  
// };