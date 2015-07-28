// var start  = function(sentence){
// var starts =[]; // all word starting letters in sentece(including those duplicated)
// var letters =[];//non-duplicated word starting 'letters' array
// var occurances =[];//number of occurances of each letter in 'letters' array
// var words = sentence.toLowerCase().split(' ');//convert sentence from string to array
// words.forEach(function(word){
// starts.push(word[0]);//push each word starting letter to 'starts' array
// });



// //function mode(starts){

//     if(starts.length == 0)
//     	return null;
//     var modeMap = {};
//     var maxEl = starts[0], maxCount = 1;
//     for(var i = 0; i < starts.length; i++)
//     {
//     	var el = starts[i];
//     	if(modeMap[el] == null)
//     		modeMap[el] = 1;
//     	else
//     		modeMap[el]++;	
//     	if(modeMap[el] > maxCount)
//     	{
//     		maxEl = el;
//     		maxCount = modeMap[el];
//     		occurances.push(maxEl);
//     	}
//     //}
//     //return maxEl;
// }
// //occurances.sort();//sort array of duplicate and non-duplicate starting letters
// //var mostOccured = most(starts);
// return occurances;
// }
function start(str) {
    var splitStr = str.split(" ");
    var firstChar = [];
    var letterMap = {};
    //var letter = "";
    var count = 0;
    var mostLetter = "";
    
    for(var x = 0; x < splitStr.length; x++){
        firstChar.push((splitStr[x].substr(0,1)).toUpperCase());
        
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