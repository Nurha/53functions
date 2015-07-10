

function longest_word(str){
    var spltStr = str.split(" ");//return will be an array with values
    var lng = 0; //declaring
    var trv = null;
        for(var x = 0;x < spltStr.length; x++){
            if(lng < spltStr[x].length) {
                lng = spltStr[x].length;
                trv = spltStr[x];
            }
        }
     return [trv, lng] ;// returns the longest word and its length
     }  
