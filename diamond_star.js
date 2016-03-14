function diamond_star(character){
  var string = '\n';
  // top of diamond
  for(x=1; x<=5 ;x++){
    for(y=1; y<=5-x; y++){
      string += ' ';
    };
    for(y=1; y<=x; y++){
        string += character + ' ';
    };
    string += '\n';
  };
// bottom of diamond
  for(x=5-1; x>=1; x--){
    for(y=1; y<=5-x; y++){
      string += ' ';
    }
    for(y=1; y<=x; y++){
      string += character + ' ';
    };
    string += '\n';
};

return string;
};
console.log(diamond_star('*'));
