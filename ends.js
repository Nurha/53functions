function ends(str) {
    var splitStr = str.split(" ");
    var lastLetter = [];
    var letterMap = {};
    var count = 0;
    var mostLetter = "";
    
    for(var x = 0; x < splitStr.length; x++){
        lastLetter.push((splitStr[x].slice(-1)).toLowerCase());
        
    }

    for(var i = 0; i < lastLetter.length; i++){
        for (var y = 0; y < lastLetter.length; y++){
            if(lastLetter[i] === lastLetter[y]){
                count++;
           
              letterMap[lastLetter[i]] = count;
               
            }


        }
        count = 0;
    }
    var min = 0, x;
    for( x in letterMap) {
        if( letterMap[x] > min){ 
            min = letterMap[x];
            mostLetter = x;
        }
    }
    return mostLetter;
}
	

