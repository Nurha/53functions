function uppercase_letters(string){
    var str = string.match(/[A-Z]/g, '');
    return str;
};
console.log(uppercase_letters('60 YeArS ToDay'));
