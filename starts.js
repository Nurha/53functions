
function starts(str) {
    var splitStr = str.split(" ");
    var firstChar = [];
    var letterMap = {};
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
        
    }
    var max = 0;
    for( x in letterMap) {
        if( letterMap[x] > max){ 
            max = letterMap[x];
            mostLetter = x;
        }
    }
    return mostLetter;
}
	

