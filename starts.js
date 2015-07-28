// function starts(sentance){
// 	var firstLetters = [];

// 	var splitsent = sentance.toLowerCase().split(" ");
// 	splitsent.forEach(function(letter){
//     firstLetters.push(letter[0]);
// 	});
// 	splitsent.sort();

//   return firstLetters;

// 	var occuredMost = [];
//   var letterMap = {};
//   var splitArray = firstLetters.split(",");
// 	splitArray.forEach(function(letter){
//     occuredMost.push(letter[0]);
//   });
//   return occuredMost;

// };
function starts(str) {
    var splitStr = str.split(" ");
    var firstChar = [];
    var letterMap = {};
    //var letter = "";
    var count = 0;
    var mostLetter = "";
    
    for(var x = 0; x < splitStr.length; x++){
        firstChar.push((splitStr[x].substr(0,1)).toLowerCase());
        
    }

    for(var i = 0; i < firstChar.length; i++){
        for (var y = 0; y < firstChar.length; y++){
            if(firstChar[i] === firstChar[y]){
                count++;
           
              letterMap[firstChar[i]] = count;
               
            }


        }
        count = 0;
    }
    var max = 0, x;
    for( x in letterMap) {
        if( letterMap[x] > max){ 
            max = letterMap[x];
            mostLetter = x;
        }
    }
    return mostLetter;
}
	

