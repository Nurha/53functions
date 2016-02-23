function lowercase_letters(line){
    var str = line.match(/[a-z]/g, '');
    return str;
};
console.log(lowercase_letters('6 aPPLEs A DaY'));
