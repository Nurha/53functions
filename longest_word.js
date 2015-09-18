function longest_word(str) {
    var spltStr = str.split(" "); //return will be an array with values
    var leng = 0; //declaring
    var word = null;
    for (var x = 0; x < spltStr.length; x++) {
        if (leng < spltStr[x].length) {
            leng = spltStr[x].length;
            word = spltStr[x];
        }
    }
    return [word, leng]; // returns the longest word and its length
}