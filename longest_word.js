// function longest_word(sent){
//     var arr = sent.match(/\w[a-z]{0,}/gi);//
//     var result = arr[0];//giving it a 0 it has to start counting at 0
//     for(var x = 1; x < arr.length; x++){ 
//         if(results.length < arr[1].length){
//             results = arr[x];
//         }
//     }
//     return relults;
// }
function longest_word(str){
    var lng = 0;
    var trv = null;
    var spltStr = str.split(" ");
        for(var x = 0;x < spltStr.length; x++){
            if(lng < spltStr[x].length) {
                lng = spltStr[x].length;
                trv = spltStr[x];
            }
        }
    return trv +": "+ trv.length;
}