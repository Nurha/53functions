
function occurs_most(str) {

    var splitStr = str.split(" ");
    var mostChar = [];
    var letterMap = {};
    var count = 0;
    var mostLetter = "";
    
    for(var x = 0; x < splitStr.length; x++){
        mostChar.push((splitStr[x]).toLowerCase());
        
    }

    for(var i = 0; i < mostChar.length; i++){
        for (var y = 0; y < mostChar.length; y++){
            if(mostChar[i] === mostChar[y]){
                count++;
           
              letterMap[mostChar[i]] = count;
               
            };


        };
    };
    var max = 0;
    //var x = x;
    for( x in letterMap) {
        if( letterMap[x] > max){ 
            max = letterMap[x];
            mostLetter = x;
        };
    };
    return mostLetter;
};
	

    