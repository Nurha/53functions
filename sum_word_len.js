function sum_word_len(sent){
	var sum = 0;
	var words = sent.split(" ");
		for( var i = 0 ; i < words.length ; i++) {			
			sum+=words[i].split("").length;
} 
		return sum;

	}