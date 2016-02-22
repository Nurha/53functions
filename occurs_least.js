function occurs_least(str) {
    str = str.replace(/\s+/g, '');
    var splitStr = str.split("");
    var firstChar = [];
    var letterMap = {};
    var letter = "";
    var count = 0;
    var leastLetter = "";

    for(var x = 0; x < splitStr.length; x++){
        firstChar.push((splitStr[x]).toLowerCase());

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
    var min = Infinity, x;
    for( x in letterMap) {
        if( letterMap[x] < min){
            min = letterMap[x];
            leastLetter = x;
        }
    }
    return leastLetter;
}
