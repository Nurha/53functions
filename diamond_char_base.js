function diamond_char_base(character, number){
  var string = '\n';
  // top
  for(x=1; x<=number; x++){
    for(y=1; y<=number-x; y++){
      string += ' ';
    }
    for(y=1; y<=x; y++){
      string += character + ' ';
    }
    string += '\n';
  }
  // bottom
  for(x=number-1; x>=1; x--){
    for(y=1; y<=number-x; y++){
      string += ' ';
    }
    for(y=1; y<=x; y++){
      string += character + ' ';
    }
    string += '\n';
  }
  return string;
};
console.log(diamond_char_base('*',5 ));
