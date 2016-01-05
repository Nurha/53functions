// function occurs_most(sentance){
//     sentance = sentance.replace(/\s/g); //replaces spaces
//     var splitSentance = sentance.split("");

//     for (x = 0; x < splitSentance.length; x++) {

//     };
};function occurs_most(str) {
    str = str.replace(/\s+/g, '');
    var splitStr = str.split("");
    var firstChar = [];
    var letterMap = {};
    var letter = "";
    var count = 0;
    var mostLetter = "";
    
    for(var x = 0; x < splitStr.length; x++){
        firstChar.push((splitStr[x]).toUpperCase());
        
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

