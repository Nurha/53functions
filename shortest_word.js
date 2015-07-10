// function shortest_word(str){
//     var spltStr = str.split(" ");//the result will be an array with values
//     var shr = spltStr[0].length;//assigned the array values to the shr variable
//     var trv = null;
//         for(var x = 1;x < spltStr.length; x++){//comparing all the items in the array
//             if(shr < spltStr[x].length) {// it assumes that the first word is the shortest,count its and moves to the next word and checks if its shorter , meaning it counts all the words and compares them to see which is shorter. 
//                 shr = spltStr[x].length;
//                 trv = spltStr[x];
//             }
//         }
//      return [trv, shr] ;
//      }  

function shortest_word(str) {
		
    	var spltStr = str.split(" ");
    	var shtWord = spltStr[0];
    	for(var i = 0; i < spltStr.length; i++){
    		if(spltStr[i] !== null){
	    		if(shtWord.length > spltStr[i].length){
	    			shtWord = spltStr[i];
	    		}
	    	}
    	}
    return shtWord +": "+ shtWord.length;
}
