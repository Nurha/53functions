function shortest_word(sentence){
	
	var words = sentence.split(" ");
	var short = null;
	//var short = words[0];

        for(var i = 0 ; i < words.length ; i++)
	{	
		if(words[i].split("").length < short.split("").length){
			
 			short =[words[i],words[i].length];
		}
	}
	
	return short;
  }
//   function shortest_word(str) {
		
//     	var splitStr = str.split(" ");
//     	var word = splitStr[0];
//     	for(var x = 0; x < splitStr.length; x++){
//     		if(splitStr[x] !== null){
// 	    		if(word.length > splitStr[x].length){
// 	    			word = splitStr[x];
// 	    		}
// 	    	}
//     	}
//     return word +": "+ word.length;
// }
